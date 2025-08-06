-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE MostrarInfoExtraCitas
	-- Add the parameters for the stored procedure here
	@id as uniqueidentifier


AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;



			SELECT c.idCitas as idCita
			  ,s.nombre as Servicio
			  ,CONCAT(ud.nombre , ' ', ud.apellido) as Doctor
			  ,CONCAT(up.nombre , ' ',  up.apellido) as Paciente
			  ,ud.cedula as Cedula
			  ,ud.fechaNacimiento as fechaNacimiento
			  ,p.grupoSangineo as GrupoSanguineo
			  ,p.alergias as Alergias
			  ,p.observaciones as Observaciones
			  ,ud.telefono as telefono
			  ,[fecha]
			  ,[hora]
			  ,[notaMedica]
			  ,con.nombre as Consultorio
			  ,e.descripcion as Estado
		  FROM Cita as c
		  INNER JOIN Servicio as s
		  ON s.idServicio = c.idServicio 
		  INNER JOIN Paciente as p
		  ON p.idPaciente = c.idPaciente
		  INNER JOIN Doctor as d
		  ON d.idDoctor = c.idDoctor
		  INNER JOIN Usuario as up
		  ON up.idUsuario = p.idUsuario
		  INNER JOIN Usuario as ud
		  ON ud.idUsuario = d.idUsuario
		  INNER JOIN Consultorio as con
		  ON c.idConsultorio = con.idConsultorio
		  INNER JOIN Estado as e
		  ON e.IdEstado = c.idEstado
		  where c.idCitas = @id


	


END