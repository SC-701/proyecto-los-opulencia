CREATE TABLE [dbo].[Rol] (
    [idRol]    INT          IDENTITY (1, 1) NOT NULL,
    [nombre]   VARCHAR (50) NULL,
    [idEstado] INT          NULL,
    PRIMARY KEY CLUSTERED ([idRol] ASC),
    CONSTRAINT [FK__Rol__idEstado__7E37BEF6] FOREIGN KEY ([idEstado]) REFERENCES [dbo].[Estado] ([IdEstado])
);

