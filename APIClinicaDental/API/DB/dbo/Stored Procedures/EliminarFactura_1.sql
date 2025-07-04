-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[EliminarFactura]
	@id UNIQUEIDENTIFIER
AS
BEGIN
	SET NOCOUNT ON;

	BEGIN TRANSACTION

	DELETE FROM [dbo].[Factura]
	WHERE idFactura = @id

	COMMIT TRANSACTION
END