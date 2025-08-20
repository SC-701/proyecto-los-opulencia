using Abstracciones.Interface.DA;
using Abstracciones.Interface.Flujo;
using Abstracciones.Modelos;
using Abstracciones.Models;
using Autorizacion.Middleware;
using DA;
using DA.Repositorio;
using Flujo;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddCors(options =>
{
    options.AddPolicy("Cors", policy =>
    {
        policy.WithOrigins("http://localhost:5173")
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

//Autenticacion
var tokenConfiguration = builder.Configuration.GetSection("Token").Get<TokenConfiguracion>();
var jwtIssuer = tokenConfiguration.Issuer;
var jwtAudience = tokenConfiguration.Audience;
var jwtKey = tokenConfiguration.key;

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(
    options => {
        options.TokenValidationParameters = new Microsoft.IdentityModel.Tokens.TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = jwtIssuer,
            ValidAudience = jwtAudience,
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtKey))
        };
    }
    );



builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//DAPPER
builder.Services.AddScoped<IRepositorioDapper, RepositorioDapper>();

//Inyecciones de DA
builder.Services.AddScoped<ICitasDA, CitasDA>();
builder.Services.AddScoped<IFacturasDA, FacturasDA>();
builder.Services.AddScoped<IPacientesDA, PacientesDA>();
builder.Services.AddScoped<IDoctoresDA, DoctoresDA>();
builder.Services.AddScoped<IConsultorioDA, ConsultorioDA>();
builder.Services.AddScoped<IServicioDA, ServicioDA>();
builder.Services.AddScoped<IInventarioDA, InventarioDA>();


//Inyecciones de Flujo
builder.Services.AddScoped<ICitasFlujo, CitasFlujo>();
builder.Services.AddScoped<IFacturasFlujo, FacturasFlujo>();
builder.Services.AddScoped<IPacienteFlujo, PacientesFlujo>();
builder.Services.AddScoped<IDoctoresFlujo, DoctoresFlujo>();
builder.Services.AddScoped<IConsultorioFlujo, ConsultorioFlujo>();
builder.Services.AddScoped<IServicioFlujo, ServiciosFlujo>();
builder.Services.AddScoped<IInventarioFlujo, InventarioFlujo>();

builder.Services.AddTransient<Autorizacion.Abstracciones.Flujo.IAutorizacionFlujo, Autorizacion.Flujo.AutorizacionFlujo>();
builder.Services.AddTransient<Autorizacion.Abstracciones.DA.ISeguridadDA, Autorizacion.DA.SeguridadDA>();
builder.Services.AddTransient<Autorizacion.Abstracciones.DA.IRepositorioDapper, Autorizacion.DA.Repositorios.RepositorioDapper>();


var app = builder.Build();






// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors("Cors");
app.AutorizacionClaims();
app.UseAuthorization();



app.MapControllers();

app.Run();
