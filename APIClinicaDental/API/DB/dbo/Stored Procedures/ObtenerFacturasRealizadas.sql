CREATE PROCEDURE [dbo].[ObtenerFacturasRealizadas]
	
AS
BEGIN
	
	SET NOCOUNT ON;

	DECLARE @ObtenerFacturasRealizadas int;

	select @ObtenerFacturasRealizadas = COUNT(*) from Cita where idEstado = 7;

	select @ObtenerFacturasRealizadas;


END