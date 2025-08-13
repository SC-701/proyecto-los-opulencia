CREATE PROCEDURE [dbo].[CantidadCitasDia]
	-- Add the parameters for the stored procedure here
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	SELECT CAST(fecha AS DATE) as fecha ,  COUNT(*) AS Cantidad FROM CITA group by CAST(fecha as DATE) order by CAST(fecha as DATE)
END