CREATE PROCEDURE dbo.ObtenerInventarioPorId
  @id UNIQUEIDENTIFIER
AS
BEGIN
  SET NOCOUNT ON;

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
  INNER JOIN dbo.Estado e ON e.IdEstado = i.IdEstado
  WHERE i.IdInventario = @id;
END