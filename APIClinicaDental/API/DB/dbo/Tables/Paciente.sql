CREATE TABLE [dbo].[Paciente] (
    [idPaciente]    UNIQUEIDENTIFIER NOT NULL,
    [grupoSangineo] VARCHAR (10)     NULL,
    [alergias]      VARCHAR (100)    NULL,
    [observaciones] VARCHAR (100)    NULL,
    [idUsuario]     UNIQUEIDENTIFIER NULL,
    [idEstado]      INT              NULL,
    PRIMARY KEY CLUSTERED ([idPaciente] ASC),
    FOREIGN KEY ([idUsuario]) REFERENCES [dbo].[Usuario] ([idUsuario]),
    CONSTRAINT [FK__Paciente__idEsta__0A9D95DB] FOREIGN KEY ([idEstado]) REFERENCES [dbo].[Estado] ([IdEstado])
);

