-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE   PROCEDURE ObtenerConteoCitasCompletas

AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

	DECLARE @ConteoCompletadas int;

	select @ConteoCompletadas = COUNT(*) from Cita where idEstado = 3;

	select @ConteoCompletadas;


END