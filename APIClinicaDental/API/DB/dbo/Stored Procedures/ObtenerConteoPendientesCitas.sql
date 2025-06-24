-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE   PROCEDURE [dbo].[ObtenerConteoPendientesCitas]
	-- Add the parameters for the stored procedure here

AS
BEGIN
	SET NOCOUNT ON;
	 DECLARE @GuardarCitasPendientes int

	 select  @GuardarCitasPendientes = COUNT(*) from Cita where idEstado = 4;

	 select @GuardarCitasPendientes;
	 
END