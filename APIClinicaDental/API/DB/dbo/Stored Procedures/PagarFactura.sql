-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE PagarFactura
	-- Add the parameters for the stored procedure here
	@Pago decimal(10,2),
	@id uniqueidentifier

AS
BEGIN
	DECLARE @totalEncerrado decimal(10,2);

	SET NOCOUNT ON;

	BEGIN TRANSACTION

	IF @Pago <= 0
        THROW 50001, 'El pago debe ser mayor que 0.',1;
 
	UPDATE Factura 
	SET total = total - @Pago
	where idFactura = @id;
	
	
	select @totalEncerrado = total from Factura where idFactura = @id;

	if @totalEncerrado = 0 
		BEGIN
			UPDATE Factura 
			SET idEstado = 7
			where idFactura = @id;

		END
	ELSE 
		 BEGIN
		 	UPDATE Factura 
			SET idEstado = 8
			where idFactura = @id;

		 END

	select @id

	commit transaction


END