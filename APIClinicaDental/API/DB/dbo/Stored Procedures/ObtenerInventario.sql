CREATE PROCEDURE [dbo].[ObtenerInventario]
AS
BEGIN
    SET NOCOUNT ON;

    SELECT * FROM [dbo].[Inventario]
END