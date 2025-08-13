CREATE TABLE [dbo].[Administrativo] (
    [idAdministrativo] UNIQUEIDENTIFIER NOT NULL,
    [idUsuario]        UNIQUEIDENTIFIER NULL,
    [idEstado]         INT              NULL,
    [idRol]            INT              NULL,
    [PasswordHash]     VARCHAR (MAX)    NULL,
    PRIMARY KEY CLUSTERED ([idAdministrativo] ASC),
    FOREIGN KEY ([idUsuario]) REFERENCES [dbo].[Usuario] ([idUsuario]),
    CONSTRAINT [FK__Administr__idEst__1CBC4616] FOREIGN KEY ([idEstado]) REFERENCES [dbo].[Estado] ([IdEstado]),
    CONSTRAINT [FK_Administrativo_idRol] FOREIGN KEY ([idRol]) REFERENCES [dbo].[Rol] ([idRol])
);

