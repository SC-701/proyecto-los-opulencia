CREATE PROCEDURE [dbo].[ActualizarEstadosInventario]
AS
BEGIN
    SET NOCOUNT ON;

    UPDATE [dbo].[Inventario]
    SET idEstado = 
        CASE
            WHEN fechaVencimiento IS NOT NULL AND fechaVencimiento < CAST(GETDATE() AS DATE) THEN 4
            WHEN fechaVencimiento IS NOT NULL AND fechaVencimiento BETWEEN CAST(GETDATE() AS DATE) AND DATEADD(DAY, 5, GETDATE()) THEN 2
            WHEN cantidad = 0 THEN 3
            ELSE 1
        END;

    SELECT @@ROWCOUNT AS RegistrosActualizados;
END