CREATE PROCEDURE [dbo].[ObtenerInventarioPorId]
    @id UNIQUEIDENTIFIER
AS
BEGIN
    SET NOCOUNT ON;

    SELECT * FROM [dbo].[Inventario]
    WHERE idInventario = @id
END