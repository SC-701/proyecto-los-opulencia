-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE   PROCEDURE [dbo].[EliminarCita]
	-- Add the parameters for the stored procedure here
	@id uniqueidentifier


AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	BEGIN TRANSACTION

DELETE FROM [dbo].[Cita]
	WHERE idCitas = @id



  COMMIT TRANSACTION

	



END