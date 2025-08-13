CREATE PROCEDURE [dbo].[ObtenerFacturasPorPagar]
	
AS
BEGIN
	
	SET NOCOUNT ON;

	DECLARE @ObtenerFacturasRealizadas int;

	select @ObtenerFacturasRealizadas = COUNT(*) from Factura where idEstado = 8;

	select @ObtenerFacturasRealizadas;


END