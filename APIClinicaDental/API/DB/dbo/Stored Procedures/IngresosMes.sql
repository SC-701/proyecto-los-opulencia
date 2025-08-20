-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE IngresosMes
	-- Add the parameters for the stored procedure here

AS
BEGIN
	Declare @suma int;
	SET NOCOUNT ON;


	SELECT @suma = SUM(subtotal)
	FROM dbo.Factura where MONTH(fecha) = MONTH(GETDATE());

	select @suma
	
	
END