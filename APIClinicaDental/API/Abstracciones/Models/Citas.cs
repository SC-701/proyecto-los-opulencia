﻿using System.ComponentModel.DataAnnotations;
using System.Runtime.CompilerServices;


namespace Abstracciones.Models
{
    public class Citas
    {
        [Required(ErrorMessage = "El id del servicio es requerido")]
        public DateTime fecha { get; set; }
        [Required(ErrorMessage = "La hora es requerida")]
        public TimeSpan hora { get; set; }
        [Required(ErrorMessage = "El motivo es requerido")]
        public string? notaMedica { get; set; }


    }




    public class CitasFecha
    {
        public DateTime fecha { get; set; }
        public int Cantidad { get; set; }
    }


    public class CitasRequest : Citas
    {
        [Required(ErrorMessage = "El id del servicio es requerido")]
        public Guid idServicio { get; set; }
        [Required(ErrorMessage = "El id del doctor es requerido")]
        public Guid idDoctor { get; set; }
        [Required(ErrorMessage = "El id del paciente es requerido")]
        public Guid idPaciente { get; set; }
        [Required(ErrorMessage = "El id del consultorio es requerido")]
        public Guid idConsultorio { get; set; }
        [Required(ErrorMessage = "El id del estado es requerido")]
        public int idEstado { get; set; }

    }

    public class CitasResponse : Citas
    {
        
        public Guid idCita { get; set; }

        public string? Servicio { get; set; }

        public string? Doctor { get; set; }

        public string? Paciente { get; set; }

        public string? Consultorio { get; set; }

        public string? Estado { get; set; }


    }


    public class CitasResponseExtra : CitasResponse
    {
        public int cedula { get; set; }
        public DateTime fechaNacimiento { get; set; }
        public string? grupoSanguineo { get; set; }
        public string?  alergias { get; set; }
        public string? observaciones { get; set; }
        public string? telefono { get; set; }




    }






    }
