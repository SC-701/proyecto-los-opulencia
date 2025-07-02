-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE ObtenerDoctor
 @idDoctor UNIQUEIDENTIFIER
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;


	  SELECT 
        d.idDoctor,
        u.nombre,
        u.apellido,
        u.email,
        u.cedula,
        u.telefono,
        u.direccion,
        u.fechaNacimiento,
        d.especialidad,
        d.licenciaProfesional,
        d.fechaInicio,
        s.nombre AS servicio,
        e.descripcion AS estado
    FROM Doctor d
    INNER JOIN Usuario u ON d.idUsuario = u.idUsuario
    INNER JOIN Servicio s ON d.idServicio = s.idServicio
    INNER JOIN Estado e ON d.idEstado = e.idEstado
    WHERE d.idDoctor = @idDoctor
END