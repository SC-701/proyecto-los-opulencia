-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE ObtenerConteoCitasCanceladas
	
AS
BEGIN

	SET NOCOUNT ON;

	DECLARE @ConteoCanceldas int;

    -- Insert statements for procedure here
	SELECT @ConteoCanceldas= COUNT(*) from Cita where idEstado = 5;

	select @ConteoCanceldas;

END