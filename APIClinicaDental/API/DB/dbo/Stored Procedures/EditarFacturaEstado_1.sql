-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE EditarFacturaEstado 
	-- Add the parameters for the stored procedure here
	@idFac AS uniqueidentifier,
	@idEstado AS int
AS
BEGIN
	SET NOCOUNT ON;

	BEGIN TRANSACTION

	UPDATE [dbo].[Factura]
	   SET
	       [idEstado] = @idEstado
	 WHERE [idFactura] = @idFac

	SELECT @idFac

	COMMIT TRANSACTION
END