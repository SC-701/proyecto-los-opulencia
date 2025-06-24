CREATE TABLE [dbo].[Servicio] (
    [idServicio]  UNIQUEIDENTIFIER NOT NULL,
    [nombre]      VARCHAR (50)     NULL,
    [descripcion] VARCHAR (100)    NULL,
    [precio]      DECIMAL (10, 2)  NULL,
    [idEstado]    INT              NULL,
    PRIMARY KEY CLUSTERED ([idServicio] ASC),
    CONSTRAINT [FK__Servicio__idEsta__01142BA1] FOREIGN KEY ([idEstado]) REFERENCES [dbo].[Estado] ([IdEstado])
);

