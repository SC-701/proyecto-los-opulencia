-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
Create  PROCEDURE [dbo].[EditarCitaEstado]
	-- Add the parameters for the stored procedure here
	@id as uniqueidentifier,
	@idEstado as int

AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	BEGIN TRANSACTION

UPDATE [dbo].[Cita]
   SET
      [idEstado] = @idEstado
 WHERE idCitas = @id

	SELECT @id

		COMMIT TRANSACTION

	



END