CREATE TABLE [dbo].[Usuario] (
    [idUsuario]       UNIQUEIDENTIFIER NOT NULL,
    [nombre]          VARCHAR (50)     NULL,
    [apellido]        VARCHAR (50)     NULL,
    [email]           VARCHAR (50)     NULL,
    [cedula]          INT              NULL,
    [telefono]        INT              NULL,
    [direccion]       VARCHAR (100)    NULL,
    [fechaNacimiento] DATE             NULL,
    [idEstado]        INT              NULL,
    PRIMARY KEY CLUSTERED ([idUsuario] ASC),
    CONSTRAINT [FK__Usuario__idEstad__07C12930] FOREIGN KEY ([idEstado]) REFERENCES [dbo].[Estado] ([IdEstado]),
    CONSTRAINT [FK_Usuario_Usuario] FOREIGN KEY ([idUsuario]) REFERENCES [dbo].[Usuario] ([idUsuario]),
    UNIQUE NONCLUSTERED ([cedula] ASC),
    UNIQUE NONCLUSTERED ([email] ASC),
    UNIQUE NONCLUSTERED ([telefono] ASC),
    CONSTRAINT [UQ_Cedula] UNIQUE NONCLUSTERED ([cedula] ASC),
    CONSTRAINT [UQ_Email] UNIQUE NONCLUSTERED ([email] ASC)
);


GO
CREATE NONCLUSTERED INDEX [IX_Usuario]
    ON [dbo].[Usuario]([idUsuario] ASC);

