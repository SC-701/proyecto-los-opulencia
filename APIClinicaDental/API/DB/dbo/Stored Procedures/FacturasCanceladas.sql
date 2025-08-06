-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE FacturasCanceladas

	
AS
BEGIN

	SET NOCOUNT ON;

	DECLARE @FacCanceladas int;

    -- Insert statements for procedure here
	SELECT @FacCanceladas= COUNT(*) from Factura where idEstado = 7;

	select @FacCanceladas;

END