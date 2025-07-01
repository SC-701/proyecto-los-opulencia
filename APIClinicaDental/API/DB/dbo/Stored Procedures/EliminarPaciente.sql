-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE EliminarPaciente
	-- Add the parameters for the stored procedure here
	@idPaciente UNIQUEIDENTIFIER
AS
BEGIN
	SET NOCOUNT ON;

     
    BEGIN TRANSACTION;

    DELETE FROM [dbo].[Paciente]
    WHERE [idPaciente] = @idPaciente;

    COMMIT TRANSACTION;

END