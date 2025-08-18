-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE AgregarEstado
	-- Add the parameters for the stored procedure here
	@descripcion varchar(50),
	@estado varchar(50)
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

	BEGIN TRANSACTION
    -- Insert statements for procedure here
	INSERT INTO [dbo].[Estado]
           ([descripcion]
           ,[estado])
     VALUES
           (@descripcion,
           @estado)

	select 1
	COMMIT TRANSACTION
END