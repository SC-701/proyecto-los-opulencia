CREATE PROCEDURE [dbo].[ObtenerAdministrativoLogin]
    @CorreoElectronico VARCHAR(50)
AS
BEGIN
    SET NOCOUNT ON;

    SELECT
        A.idAdministrativo,
        U.nombre,
        U.apellido,
        U.email,
        A.PasswordHash,
        R.nombre AS Rol
    FROM dbo.Administrativo A
    INNER JOIN dbo.Usuario U ON U.idUsuario = A.idUsuario
    INNER JOIN dbo.Rol R ON R.idRol = A.idRol
    WHERE U.email = @CorreoElectronico;
END