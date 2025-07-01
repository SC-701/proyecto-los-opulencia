CREATE PROCEDURE ObtenerFacturasRealizadas
	
AS
BEGIN
	
	SET NOCOUNT ON;

	DECLARE @ObtenerFacturasRealizadas int;

	select @ObtenerFacturasRealizadas = COUNT(*) from Cita where idEstado = 3;

	select @ObtenerFacturasRealizadas;


END