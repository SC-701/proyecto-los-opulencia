CREATE PROCEDURE [dbo].[ConteoInsumosPorCategoria]
AS
BEGIN
    SET NOCOUNT ON;
    SELECT Categoria, COUNT(*) AS Total
    FROM [dbo].[Inventario]
    GROUP BY Categoria
END