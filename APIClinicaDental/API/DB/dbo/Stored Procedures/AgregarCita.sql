-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE   PROCEDURE [dbo].[AgregarCita]
	-- Add the parameters for the stored procedure here
	@id as uniqueidentifier,
	@idServicio as uniqueidentifier,
	@idDoctor as uniqueidentifier,
	@idPaciente as uniqueidentifier,
	@fecha as date,
	@hora as time(7),
	@notaMedica as varchar(250),
	@idConsultorio as uniqueidentifier,
	@idEstado as int

AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	BEGIN TRANSACTION

INSERT INTO [dbo].[Cita]
           ([idCitas]
           ,[idServicio]
           ,[idDoctor]
           ,[idPaciente]
           ,[fecha]
           ,[hora]
           ,[notaMedica]
           ,[idConsultorio]
           ,[idEstado])
     VALUES
           (@id
           ,@idServicio
           ,@idDoctor 
           ,@idPaciente
           ,@fecha
           ,@hora
           ,@notaMedica
           ,@idConsultorio
           ,@idEstado)

	SELECT @id

		COMMIT TRANSACTION

	



END