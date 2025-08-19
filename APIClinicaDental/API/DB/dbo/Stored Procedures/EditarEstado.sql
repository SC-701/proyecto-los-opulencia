-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE EditarEstado
	-- Add the parameters for the stored procedure here
	@id int,
	@descripcion varchar(50),
	@estado varchar(50)
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

	BEGIN TRANSACTION
    -- Insert statements for procedure here
	UPDATE [dbo].[Estado]
   SET [descripcion] = @descripcion
      ,[estado] = @estado
	WHERE IdEstado = @id

	select @id 

	commit transaction

END