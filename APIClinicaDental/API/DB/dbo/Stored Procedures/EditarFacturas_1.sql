-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE EditarFacturas
	@id AS uniqueidentifier,
	@idServicio AS uniqueidentifier,
	@idDoctor AS uniqueidentifier,
	@idPaciente AS uniqueidentifier,
	@fecha AS date,
	@subtotal AS decimal(18,2),
	@total AS decimal(18,2),
	@idEstado AS int
	AS
BEGIN
	SET NOCOUNT ON;

	BEGIN TRANSACTION

	UPDATE [dbo].[Factura]
	   SET
	       [idServicio] = @idServicio,
	       [idDoctor] = @idDoctor,
	       [idPaciente] = @idPaciente,
	       [fecha] = @fecha,
	       [subtotal] = @subtotal,
	       [total] = @total,
	       [idEstado] = @idEstado
	 WHERE [idFactura] = @id

	SELECT @id

	COMMIT TRANSACTION
END