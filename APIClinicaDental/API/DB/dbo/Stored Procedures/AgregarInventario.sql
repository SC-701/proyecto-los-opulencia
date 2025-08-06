CREATE PROCEDURE [dbo].[AgregarInventario]
    @id UNIQUEIDENTIFIER,
    @producto VARCHAR(50),
    @descripcion VARCHAR(100),
    @cantidad INT,
    @idEstado INT,
    @fechaVencimiento DATE,
    @Categoria VARCHAR(50),
    @Unidad VARCHAR(50)
AS
BEGIN
    SET NOCOUNT ON;

    BEGIN TRANSACTION

    INSERT INTO [dbo].[Inventario] (
        idInventario, producto, descripcion, cantidad, idEstado,
        fechaVencimiento, Categoria, Unidad
    )
    VALUES (
        @id, @producto, @descripcion, @cantidad, @idEstado,
        @fechaVencimiento, @Categoria, @Unidad
    )

    SELECT @id
    COMMIT TRANSACTION
END