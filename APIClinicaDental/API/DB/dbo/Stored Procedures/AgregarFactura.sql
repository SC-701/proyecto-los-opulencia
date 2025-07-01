-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE AgregarFactura
	@id AS uniqueidentifier,
	@idServicio AS uniqueidentifier,
	@idDoctor AS uniqueidentifier,
	@idPaciente AS uniqueidentifier,
	@fecha AS date,
	@subtotal AS decimal(18, 2),
	@total AS decimal(18, 2),
	@idEstado AS int
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	BEGIN TRANSACTION

	INSERT INTO [dbo].[Factura]
		([idFactura], [idServicio], [idDoctor], [idPaciente], [fecha], [subtotal], [total], [idEstado])
	VALUES
		(@id, @idServicio, @idDoctor, @idPaciente, @fecha, @subtotal, @total, @idEstado);

	SELECT @id AS idFacturaCreada;

	COMMIT TRANSACTION
END