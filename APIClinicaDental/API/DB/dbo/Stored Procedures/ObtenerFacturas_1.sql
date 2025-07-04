-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE ObtenerFacturas
	
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	SELECT 
		f.idFactura AS idFactura,
		s.nombre AS Servicio,
		CONCAT(ud.nombre, ' ', ud.apellido) AS Doctor,
		CONCAT(up.nombre, ' ', up.apellido) AS Paciente,
		f.fecha,
		f.subtotal,
		f.total,
		e.descripcion AS Estado
	FROM Factura AS f
	INNER JOIN Servicio AS s ON s.idServicio = f.idServicio
	INNER JOIN Paciente AS p ON p.idPaciente = f.idPaciente
	INNER JOIN Doctor AS d ON d.idDoctor = f.idDoctor
	INNER JOIN Usuario AS up ON up.idUsuario = p.idUsuario
	INNER JOIN Usuario AS ud ON ud.idUsuario = d.idUsuario
	INNER JOIN Estado AS e ON e.idEstado = f.idEstado
END