-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[ObtenerConteoPendientesFacturas]

AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	DECLARE @GuardarFacPendientes int

select  @GuardarFacPendientes = COUNT(*) from Factura where idEstado = 4;

select @GuardarFacPendientes;
	 
END