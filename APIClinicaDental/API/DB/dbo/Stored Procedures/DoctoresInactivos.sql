Create PROCEDURE [dbo].[DoctoresInactivos]
AS
BEGIN
    SET NOCOUNT ON;

    SELECT COUNT(*) AS Inactivos
    FROM [dbo].[Doctor]
    WHERE idEstado = 2;
END