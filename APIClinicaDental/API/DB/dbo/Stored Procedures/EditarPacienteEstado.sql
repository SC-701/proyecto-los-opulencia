CREATE PROCEDURE [dbo].[EditarPacienteEstado]
    @id UNIQUEIDENTIFIER,
    @idEstado INT
AS
BEGIN
    SET NOCOUNT ON;

    BEGIN TRANSACTION;

    UPDATE [dbo].[Paciente]
    SET [idEstado] = @idEstado
    WHERE [idPaciente] = @id;

    SELECT @id; 

    COMMIT TRANSACTION;
END