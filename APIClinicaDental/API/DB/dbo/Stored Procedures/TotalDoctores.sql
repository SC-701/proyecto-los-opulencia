Create PROCEDURE [dbo].[TotalDoctores]
AS
BEGIN
    SET NOCOUNT ON;

    SELECT COUNT(*) AS Total
    FROM [dbo].[Doctor];
END