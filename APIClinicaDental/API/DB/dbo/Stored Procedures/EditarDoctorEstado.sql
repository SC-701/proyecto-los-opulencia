Create PROCEDURE [dbo].[EditarDoctorEstado]
    @id UNIQUEIDENTIFIER,
    @idEstado INT
AS
BEGIN
    SET NOCOUNT ON;

    BEGIN TRANSACTION;

    UPDATE [dbo].[Doctor]
    SET [idEstado] = @idEstado
    WHERE [idDoctor] = @id;

    SELECT @id;

    COMMIT TRANSACTION;
END