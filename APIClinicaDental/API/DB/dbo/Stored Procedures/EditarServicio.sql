-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[EditarServicio]
	@id uniqueidentifier,
	@nombre varchar(50),
	@descripcion varchar(100),
	@precio decimal(10,2),
	@idEstado int
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;
	BEGIN TRANSACTION
    -- Insert statements for procedure here
	UPDATE [dbo].[Servicio]
			  SET 
			    [nombre] = @nombre
			   ,[descripcion] = @descripcion
			   ,[precio] = @precio
			   ,[idEstado] = @idEstado 
		 WHERE
			   [idServicio] = @id


	select @id
	COMMIT TRANSACTION


END