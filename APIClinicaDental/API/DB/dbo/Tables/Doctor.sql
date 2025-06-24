CREATE TABLE [dbo].[Doctor] (
    [idDoctor]            UNIQUEIDENTIFIER NOT NULL,
    [especialidad]        VARCHAR (200)    NULL,
    [licenciaProfesional] VARCHAR (100)    NULL,
    [fechaInicio]         DATE             NULL,
    [idUsuario]           UNIQUEIDENTIFIER NULL,
    [idServicio]          UNIQUEIDENTIFIER NULL,
    [idEstado]            INT              NULL,
    PRIMARY KEY CLUSTERED ([idDoctor] ASC),
    FOREIGN KEY ([idServicio]) REFERENCES [dbo].[Servicio] ([idServicio]),
    FOREIGN KEY ([idUsuario]) REFERENCES [dbo].[Usuario] ([idUsuario]),
    CONSTRAINT [FK__Doctor__idEstado__114A936A] FOREIGN KEY ([idEstado]) REFERENCES [dbo].[Estado] ([IdEstado])
);

