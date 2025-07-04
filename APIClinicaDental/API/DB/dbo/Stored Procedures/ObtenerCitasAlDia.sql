-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[ObtenerCitasAlDia]
	-- Add the parameters for the stored procedure here
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	DECLARE @CitasHoy int

	SELECT  COUNT(*)
	FROM Cita
	WHERE CAST(fecha AS DATE) = 
	CAST(GETUTCDATE() AT TIME ZONE 'UTC' AT TIME ZONE 'Central America Standard Time' AS DATE);

	select @CitasHoy
END