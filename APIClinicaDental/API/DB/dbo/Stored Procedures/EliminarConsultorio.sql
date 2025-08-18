-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[EliminarConsultorio]
	@id uniqueidentifier
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;
	BEGIN TRANSACTION
    -- Insert statements for procedure here
	DELETE FROM Consultorio where idConsultorio = @id

	select @id
	COMMIT TRANSACTION

END