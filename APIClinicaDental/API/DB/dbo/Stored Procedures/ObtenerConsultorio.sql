CREATE   PROCEDURE [dbo].[ObtenerConsultorio]
	-- Add the parameters for the stored procedure here
	@Id uniqueidentifier
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
		SELECT c.idConsultorio as idConsultorio
			  ,c.nombre as Consultorio
			  ,c.ubicacion
			  ,e.IdEstado as Estado
		  FROM Consultorio as c
		  INNER JOIN Doctor as d
		  ON d.idDoctor = c.idDoctor
		  INNER JOIN Estado as e
		  ON e.IdEstado = c.idEstado
		  Where idConsultorio = @Id;
END