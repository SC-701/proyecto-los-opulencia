CREATE TABLE [dbo].[Factura] (
    [idFactura]  UNIQUEIDENTIFIER NOT NULL,
    [idServicio] UNIQUEIDENTIFIER NULL,
    [idDoctor]   UNIQUEIDENTIFIER NULL,
    [idPaciente] UNIQUEIDENTIFIER NULL,
    [fecha]      DATE             NULL,
    [subtotal]   DECIMAL (10, 2)  NULL,
    [total]      DECIMAL (10, 2)  NULL,
    [idEstado]   INT              NULL,
    PRIMARY KEY CLUSTERED ([idFactura] ASC),
    FOREIGN KEY ([idDoctor]) REFERENCES [dbo].[Doctor] ([idDoctor]),
    FOREIGN KEY ([idPaciente]) REFERENCES [dbo].[Paciente] ([idPaciente]),
    FOREIGN KEY ([idServicio]) REFERENCES [dbo].[Servicio] ([idServicio]),
    CONSTRAINT [FK__Factura__idEstad__22751F6C] FOREIGN KEY ([idEstado]) REFERENCES [dbo].[Estado] ([IdEstado])
);

