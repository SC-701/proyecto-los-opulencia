CREATE PROCEDURE [dbo].[ContarTotalInsumos]
AS
BEGIN
    SET NOCOUNT ON;
    SELECT COUNT(*) AS Total FROM [dbo].[Inventario]
END