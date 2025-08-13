CREATE PROCEDURE [dbo].[ObtenerRolAdministrativo]
    @CorreoElectronico VARCHAR(50)
AS
BEGIN
    SET NOCOUNT ON;

    SELECT
        R.idRol,
        R.nombre AS NombreRol
    FROM
        Administrativo A
        INNER JOIN Rol R
            ON A.idRol = R.idRol
        INNER JOIN Usuario U
            ON A.idUsuario = U.idUsuario
    WHERE
        U.email = @CorreoElectronico;
END