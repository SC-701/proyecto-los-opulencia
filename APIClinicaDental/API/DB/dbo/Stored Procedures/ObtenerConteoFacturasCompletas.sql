﻿-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE ObtenerConteoFacturasCompletas

AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

	DECLARE @ConteoFacCompletadas int;

	select @ConteoFacCompletadas = COUNT(*) from Factura where idEstado = 3;

	select @ConteoFacCompletadas;

END