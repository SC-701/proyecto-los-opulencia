-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[ObtenerCitasAlDiaPendientes]
	-- Add the parameters for the stored procedure here
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	DECLARE @CitasHoyPendiente int

	SELECT  @CitasHoyPendiente =  COUNT(*)
	FROM Cita
	WHERE idEstado = 4 and CAST(fecha AS DATE) = 
	CAST(GETUTCDATE() AT TIME ZONE 'UTC' AT TIME ZONE 'Central America Standard Time' AS DATE);

	select @CitasHoyPendiente
END