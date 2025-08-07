-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[AgregarConsultorio]
	@id uniqueidentifier,
	@nombre varchar(50),
	@ubicacion varchar(100),
	@idDoctor varchar(100),
	@idEstado int
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;
	BEGIN TRANSACTION

    -- Insert statements for procedure here
	INSERT INTO [dbo].[Consultorio]
			   ([idConsultorio]
			   ,[nombre]
			   ,[ubicacion]
			   ,[idDoctor]
			   ,[idEstado])
		 VALUES
			   (@id
			   ,@nombre
			   ,@ubicacion
			   ,@idDoctor
			   ,@idEstado) 

	select @id
	COMMIT TRANSACTION


END