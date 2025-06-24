CREATE TABLE [dbo].[Cita] (
    [idCitas]       UNIQUEIDENTIFIER NOT NULL,
    [idServicio]    UNIQUEIDENTIFIER NULL,
    [idDoctor]      UNIQUEIDENTIFIER NULL,
    [idPaciente]    UNIQUEIDENTIFIER NULL,
    [fecha]         DATE             NULL,
    [hora]          TIME (7)         NULL,
    [notaMedica]    VARCHAR (250)    NULL,
    [idConsultorio] UNIQUEIDENTIFIER NULL,
    [idEstado]      INT              CONSTRAINT [DF_Cita_idEstado] DEFAULT ((4)) NULL,
    PRIMARY KEY CLUSTERED ([idCitas] ASC),
    FOREIGN KEY ([idConsultorio]) REFERENCES [dbo].[Consultorio] ([idConsultorio]),
    FOREIGN KEY ([idDoctor]) REFERENCES [dbo].[Doctor] ([idDoctor]),
    FOREIGN KEY ([idPaciente]) REFERENCES [dbo].[Paciente] ([idPaciente]),
    FOREIGN KEY ([idServicio]) REFERENCES [dbo].[Servicio] ([idServicio]),
    CONSTRAINT [FK__Cita__idEstado__29221CFB] FOREIGN KEY ([idEstado]) REFERENCES [dbo].[Estado] ([IdEstado])
);

