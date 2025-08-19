Create PROCEDURE [dbo].[DoctoresNuevos]
AS
BEGIN
    SET NOCOUNT ON;

    SELECT COUNT(*) AS cantidadDoctoresNuevos
    FROM [dbo].[Doctor] d
    INNER JOIN [dbo].[Usuario] u ON d.idUsuario = u.idUsuario
    WHERE MONTH(u.fechaCreacion) = MONTH(GETDATE())
      AND YEAR(u.fechaCreacion)  = YEAR(GETDATE());
END