-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[AgregarFacturas] 

@idFac as uniqueidentifier,
@idServicio as uniqueidentifier,
@idDoctor as uniqueidentifier,
@idPaciente as uniqueidentifier,
@fecha as date,
@subtotal AS decimal(18,2),
@total AS decimal(18,2),
@idEstado as int


AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
BEGIN TRANSACTION

	INSERT INTO [dbo].[Factura]
           ([idFactura]
           ,[idServicio]
           ,[idDoctor]
           ,[idPaciente]
           ,[fecha]
           ,[subtotal]
           ,[total]
           ,[idEstado])
     VALUES
           (@idFac
           ,@idServicio
           ,@idDoctor 
           ,@idPaciente
           ,@fecha
           ,@subtotal
           ,@total
           ,@idEstado)

	SELECT @idFac

	COMMIT TRANSACTION
END