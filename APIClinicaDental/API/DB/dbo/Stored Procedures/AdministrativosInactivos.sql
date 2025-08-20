Create PROCEDURE [dbo].[AdministrativosInactivos]
AS
BEGIN
    SET NOCOUNT ON;

    SELECT COUNT(*) AS Total
    FROM [dbo].[Administrativo]
    WHERE [idEstado] = 2; 
END