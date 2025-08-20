Create PROCEDURE [dbo].[EditarAdministrativoEstado]
    @id UNIQUEIDENTIFIER,
    @idEstado INT
AS
BEGIN
    SET NOCOUNT ON;

    BEGIN TRANSACTION;

    UPDATE [dbo].[Administrativo]
    SET [idEstado] = @idEstado
    WHERE [idAdministrativo] = @id;

    SELECT @id;

    COMMIT TRANSACTION;
END