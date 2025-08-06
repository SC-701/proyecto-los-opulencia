-- =============================================
-- Author:     TuNombre
-- Create date: 2025-08-03
-- Description: Elimina un registro de la tabla Inventario
-- =============================================
CREATE PROCEDURE [dbo].[EliminarInventario]
    @id UNIQUEIDENTIFIER
AS
BEGIN
    SET NOCOUNT ON;

    BEGIN TRANSACTION

    DELETE FROM [dbo].[Inventario]
    WHERE idInventario = @id

    COMMIT TRANSACTION
END