Create PROCEDURE [dbo].[EliminarAdministrativo]
    @idAdministrativo UNIQUEIDENTIFIER
AS
BEGIN
    SET NOCOUNT ON;

    BEGIN TRANSACTION;

    DELETE FROM [dbo].[Administrativo]
    WHERE [idAdministrativo] = @idAdministrativo;

    COMMIT TRANSACTION;
END