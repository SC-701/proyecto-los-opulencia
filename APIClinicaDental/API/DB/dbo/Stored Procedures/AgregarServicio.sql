-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[AgregarServicio]
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
	INSERT INTO [dbo].[Servicio]
			   ([idServicio]
			   ,[nombre]
			   ,[descripcion]
			   ,[precio]
			   ,[idEstado])
		 VALUES
			   (@id
			   ,@nombre
			   ,@descripcion
			   ,@precio
			   ,@idEstado) 

	select @id
	COMMIT TRANSACTION


END