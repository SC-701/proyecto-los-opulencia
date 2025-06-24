-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE ObtenerConteoTotalCitas
	-- Add the parameters for the stored procedure here

AS
BEGIN
	SET NOCOUNT ON;
	 DECLARE @GuardarTotalCitas int

	 select  @GuardarTotalCitas = COUNT(*) from Cita;

	 select @GuardarTotalCitas;
	 
END