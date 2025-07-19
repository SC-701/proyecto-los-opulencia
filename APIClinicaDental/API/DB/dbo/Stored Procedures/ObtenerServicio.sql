-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE ObtenerServicio
	@id uniqueidentifier 
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	SELECT 
	s.idServicio as id,
	s.nombre as nombre,
	s.descripcion as descripcion,
	s.precio as precio,
	e.descripcion as estado
	from Servicio s
	INNER JOIN Estado e
 	ON s.idEstado = e.IdEstado
	where idServicio = @id


END