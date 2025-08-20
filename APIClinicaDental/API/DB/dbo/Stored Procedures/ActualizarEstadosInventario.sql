CREATE PROCEDURE dbo.ActualizarEstadosInventario
AS
BEGIN
    SET NOCOUNT ON;

    -- Referencia de IDs:
    -- 6 = Disponible
    -- 11 = Por vencer
    -- 12 = Agotado
    -- 13 = Vencido

    UPDATE i
      SET i.IdEstado =
        CASE
            -- Vencido: fecha < hoy
            WHEN i.FechaVencimiento IS NOT NULL
                 AND CONVERT(date, i.FechaVencimiento) < CONVERT(date, GETDATE())
            THEN 13

            -- Por vencer: entre hoy y hoy + 5 días
            WHEN i.FechaVencimiento IS NOT NULL
                 AND CONVERT(date, i.FechaVencimiento) BETWEEN CONVERT(date, GETDATE())
                                                          AND DATEADD(day, 5, CONVERT(date, GETDATE()))
            THEN 11

            -- Agotado: cantidad = 0
            WHEN i.Cantidad = 0
            THEN 12

            -- Disponible: todo lo demás
            ELSE 6
        END
    FROM dbo.Inventario AS i;

    SELECT @@ROWCOUNT AS RegistrosActualizados;
END