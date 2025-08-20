
Create PROCEDURE [dbo].[ObtenerAdministrativo]
    @idAdministrativo UNIQUEIDENTIFIER
AS
BEGIN
    SET NOCOUNT ON;

    SELECT 
        a.idAdministrativo,
        u.nombre,
        u.apellido,
        u.email,
        u.cedula,
        u.telefono,
        u.direccion,
        u.fechaNacimiento,
        r.nombre AS rol,
        e.descripcion AS estado
    FROM Administrativo a
    INNER JOIN Usuario u ON a.idUsuario = u.idUsuario
    INNER JOIN Rol r ON a.idRol = r.idRol
    INNER JOIN Estado e ON a.idEstado = e.idEstado
    WHERE a.idAdministrativo = @idAdministrativo
END