-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE EditarEstadoServicio
	@id uniqueidentifier,
	@idEstado int
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	BEGIN TRANSACTION 

	UPDATE Servicio
	SET idEstado = @idEstado
	where idServicio = @id;

	select @id 
	
	COMMIT TRANSACTION

	
END