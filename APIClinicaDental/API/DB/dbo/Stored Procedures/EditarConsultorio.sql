CREATE PROCEDURE [dbo].[EditarConsultorio]
	@id uniqueidentifier,
	@nombre varchar(50),
	@ubicacion varchar(200),
	@idDoctor uniqueidentifier,
	@idEstado int
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;
	BEGIN TRANSACTION
    -- Insert statements for procedure here
	UPDATE [dbo].[Consultorio]
			  SET 
			    [nombre] = @nombre
			   ,[ubicacion] = @ubicacion
			   ,[idDoctor] = @idDoctor
			   ,[idEstado] = @idEstado 
		 WHERE
			   [idConsultorio] = @id

	select @id
	COMMIT TRANSACTION

END