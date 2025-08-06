

CREATE PROCEDURE [dbo].[EditarInventarioEstado]
    @idInventario UNIQUEIDENTIFIER,
    @idEstado INT
AS
BEGIN
    SET NOCOUNT ON;

    BEGIN TRANSACTION

    UPDATE [dbo].[Inventario]
    SET [idEstado] = @idEstado
    WHERE [idInventario] = @idInventario

    SELECT @idInventario

    COMMIT TRANSACTION
END