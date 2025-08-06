CREATE PROCEDURE [dbo].[EditarInventario]
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

    UPDATE [dbo].[Inventario]
    SET producto = @producto,
        descripcion = @descripcion,
        cantidad = @cantidad,
        idEstado = @idEstado,
        fechaVencimiento = @fechaVencimiento,
        Categoria = @Categoria,
        Unidad = @Unidad
    WHERE idInventario = @id

    SELECT @id
    COMMIT TRANSACTION
END