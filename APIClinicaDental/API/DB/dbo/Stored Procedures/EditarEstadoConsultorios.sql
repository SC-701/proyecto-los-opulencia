CREATE PROCEDURE [dbo].[EditarConsultorioEstado]
    @id UNIQUEIDENTIFIER,
    @idEstado INT
AS
BEGIN
    UPDATE Consultorio 
    SET idEstado = @idEstado
    WHERE idConsultorio = @id
    
    SELECT @id
END
