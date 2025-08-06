CREATE PROCEDURE [dbo].[ConteoInsumosPorEstado]
AS
BEGIN
    SET NOCOUNT ON;
    SELECT idEstado, COUNT(*) AS Total
    FROM [dbo].[Inventario]
    GROUP BY idEstado
END