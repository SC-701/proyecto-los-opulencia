-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE ObtenerPacientes 

AS
BEGIN
	SET NOCOUNT ON;
	SELECT 
        p.idPaciente,
        u.nombre,
        u.apellido,
        u.email,
        u.cedula,
        u.telefono,
        u.direccion,
        u.fechaNacimiento,
        p.grupoSangineo,
        p.alergias,
        p.observaciones,
        e.descripcion AS estado
    FROM Paciente p
    INNER JOIN Usuario u ON p.idUsuario = u.idUsuario
    INNER JOIN Estado e ON p.idEstado = e.idEstado
END