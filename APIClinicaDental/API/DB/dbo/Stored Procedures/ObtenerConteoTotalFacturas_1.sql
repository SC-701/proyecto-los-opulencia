-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[ObtenerConteoTotalFacturas]

AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    	 DECLARE @GuardarTotalCitas int

	 select  @GuardarTotalCitas = COUNT(*) from Factura;

	 select @GuardarTotalCitas;
	 
END