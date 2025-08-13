-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[ObtenerServiciosActivos]
	-- Add the parameters for the stored procedure here
	
AS
BEGIN
	DECLARE @conteo int;
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	SELECT @conteo =  COUNT(*) from Servicio where idEstado = 1;

	SELECT @conteo;
END