﻿-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[ObtenerConteoTotalFacturas]

AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    	 DECLARE @GuardarTotalFacturas int

	 select  @GuardarTotalFacturas = COUNT(*) from Factura;

	 select @GuardarTotalFacturas;
	 
END