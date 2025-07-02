using Abstracciones.Interface.DA;
using Abstracciones.Interface.Flujo;
using DA;
using DA.Repositorio;
using Flujo;

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

//Inyecciones de Flujo
builder.Services.AddScoped<ICitasFlujo, CitasFlujo>();
builder.Services.AddScoped<IFacturasFlujo, FacturasFlujo>();
builder.Services.AddScoped<IPacienteFlujo, PacientesFlujo>();
builder.Services.AddScoped<IDoctoresFlujo, DoctoresFlujo>();

var app = builder.Build();






// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors("Cors");

app.UseAuthorization();

app.MapControllers();

app.Run();
