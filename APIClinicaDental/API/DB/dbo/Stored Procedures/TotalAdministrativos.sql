Create PROCEDURE [dbo].[TotalAdministrativos]
AS
BEGIN
    SET NOCOUNT ON;

    SELECT COUNT(*) AS Total
    FROM [dbo].[Administrativo];
END