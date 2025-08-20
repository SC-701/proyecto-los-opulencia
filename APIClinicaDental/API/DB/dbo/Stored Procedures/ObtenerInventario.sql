CREATE PROCEDURE dbo.ObtenerInventario
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
    e.Descripcion AS Estado  -- 👈 agrega el nombre del estado
  FROM dbo.Inventario i
  INNER JOIN dbo.Estado e ON e.IdEstado = i.IdEstado;
END