CREATE TABLE [dbo].[Inventario] (
    [idInventario] UNIQUEIDENTIFIER NOT NULL,
    [producto]     VARCHAR (50)     NULL,
    [descripcion]  VARCHAR (100)    NULL,
    [cantidad]     INT              NULL,
    [idEstado]     INT              NULL,
    CONSTRAINT [PK_Inventario] PRIMARY KEY CLUSTERED ([idInventario] ASC),
    CONSTRAINT [FK_Inventario_Estado] FOREIGN KEY ([idEstado]) REFERENCES [dbo].[Estado] ([IdEstado]),
    CONSTRAINT [FK_Inventario_Inventario] FOREIGN KEY ([idInventario]) REFERENCES [dbo].[Inventario] ([idInventario])
);

