CREATE PROCEDURE dbo.EditarInventarioEstado
  @idInventario UNIQUEIDENTIFIER,
  @idEstado INT
AS
BEGIN
  SET NOCOUNT ON; SET XACT_ABORT ON;
  BEGIN TRY
    BEGIN TRAN;

    UPDATE dbo.Inventario
      SET IdEstado = @idEstado
    WHERE IdInventario = @idInventario;

    IF @@ROWCOUNT = 0 RAISERROR('Inventario no encontrado.',16,1);

    SELECT
      i.IdInventario,
      i.Producto,
      i.Descripcion,
      i.Cantidad,
      i.IdEstado,
      i.FechaVencimiento,
      i.Categoria,
      i.Unidad,
      e.Descripcion AS Estado   
    FROM dbo.Inventario i
    JOIN dbo.Estado e ON e.IdEstado = i.IdEstado
    WHERE i.IdInventario = @idInventario;

    COMMIT;
  END TRY
  BEGIN CATCH
    IF XACT_STATE() <> 0 ROLLBACK; THROW;
  END CATCH
END