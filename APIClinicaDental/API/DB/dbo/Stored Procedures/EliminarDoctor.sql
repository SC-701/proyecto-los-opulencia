cREATE PROCEDURE [dbo].[EliminarDoctor]
    @idDoctor UNIQUEIDENTIFIER
AS
BEGIN
    SET NOCOUNT ON;

    BEGIN TRANSACTION;

    DELETE FROM [dbo].[Doctor]
    WHERE [idDoctor] = @idDoctor;

    COMMIT TRANSACTION;
END