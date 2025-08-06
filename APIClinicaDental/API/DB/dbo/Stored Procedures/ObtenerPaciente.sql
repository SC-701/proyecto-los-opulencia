-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[ObtenerPaciente]

 @idPaciente UNIQUEIDENTIFIER

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
        u.fechaCreacion,
        p.grupoSangineo,
        p.alergias,
        p.observaciones,
        e.descripcion AS estado
    FROM Paciente p
    INNER JOIN Usuario u ON p.idUsuario = u.idUsuario
    INNER JOIN Estado e ON p.idEstado = e.idEstado
    WHERE p.idPaciente = @idPaciente
END