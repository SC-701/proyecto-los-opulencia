CREATE TABLE [dbo].[Consultorio] (
    [idConsultorio] UNIQUEIDENTIFIER NOT NULL,
    [nombre]        VARCHAR (50)     NULL,
    [ubicacion]     VARCHAR (200)    NULL,
    [idDoctor]      UNIQUEIDENTIFIER NULL,
    [idEstado]      INT              NULL,
    PRIMARY KEY CLUSTERED ([idConsultorio] ASC),
    FOREIGN KEY ([idDoctor]) REFERENCES [dbo].[Doctor] ([idDoctor]),
    CONSTRAINT [FK__Consultor__idEst__17036CC0] FOREIGN KEY ([idEstado]) REFERENCES [dbo].[Estado] ([IdEstado])
);

