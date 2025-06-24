-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE   PROCEDURE [dbo].[ObtenerCitas]
	-- Add the parameters for the stored procedure here

AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here


		SELECT c.idCitas as idCita
			  ,s.nombre as Servicio
			  ,CONCAT(ud.nombre , ' ', ud.apellido) as Doctor
			  ,CONCAT(up.nombre , ' ',  up.apellido) as Paciente
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




	



END