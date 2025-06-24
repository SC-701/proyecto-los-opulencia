CREATE TABLE [dbo].[Administrativo] (
    [idAdministrativo] UNIQUEIDENTIFIER NOT NULL,
    [idRol]            INT              NULL,
    [idUsuario]        UNIQUEIDENTIFIER NULL,
    [idEstado]         INT              NULL,
    PRIMARY KEY CLUSTERED ([idAdministrativo] ASC),
    FOREIGN KEY ([idRol]) REFERENCES [dbo].[Rol] ([idRol]),
    FOREIGN KEY ([idUsuario]) REFERENCES [dbo].[Usuario] ([idUsuario]),
    CONSTRAINT [FK__Administr__idEst__1CBC4616] FOREIGN KEY ([idEstado]) REFERENCES [dbo].[Estado] ([IdEstado])
);

