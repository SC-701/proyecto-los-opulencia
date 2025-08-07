CREATE PROCEDURE [dbo].[ContarInsumosPorEstado]
    @idEstado INT
AS
BEGIN
    SET NOCOUNT ON;
    SELECT COUNT(*) AS Total FROM [dbo].[Inventario]
    WHERE idEstado = @idEstado
END