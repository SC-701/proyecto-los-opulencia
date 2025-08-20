Create PROCEDURE [dbo].[DoctoresActivos]
AS
BEGIN
    SET NOCOUNT ON;

    SELECT COUNT(*) AS Activos
    FROM [dbo].[Doctor]
    WHERE idEstado = 1;
END