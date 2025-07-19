-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE ObtenerConsultorios
	-- Add the parameters for the stored procedure here
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	SELECT c.idConsultorio as id,
	c.nombre as nombre,
	c.ubicacion as ubicacion,
	CONCAT(u.nombre  , ' ' ,  u.apellido) as doctor,
	e.descripcion as Estado 
	FROM CONSULTORIO c
	INNER JOIN Estado e
	ON c.idEstado = e.IdEstado
	INNER JOIN Doctor d
	ON c.idDoctor = d.idDoctor
	INNER JOIN Usuario u
	ON u.idUsuario = d.idUsuario;



END