CREATE TABLE [dbo].[Estado] (
    [IdEstado]    INT          IDENTITY (1, 1) NOT NULL,
    [descripcion] VARCHAR (50) NULL,
    [estado]      VARCHAR (50) NULL,
    CONSTRAINT [PK__ESTADO__FBB0EDC15845E0B0] PRIMARY KEY CLUSTERED ([IdEstado] ASC)
);

