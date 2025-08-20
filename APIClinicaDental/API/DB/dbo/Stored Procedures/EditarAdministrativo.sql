CREATE PROCEDURE [dbo].[EditarAdministrativo]
    @idAdministrativo UNIQUEIDENTIFIER,
    @nombre VARCHAR(50),
    @apellido VARCHAR(50),
    @email VARCHAR(50),
    @cedula INT,
    @telefono INT,
    @direccion VARCHAR(100),
    @fechaNacimiento DATE,
    @idEstadoUsuario INT,
    @idRol INT,
    @passwordHash VARCHAR(MAX),
    @idEstadoAdministrativo INT
AS
BEGIN
    SET NOCOUNT ON;
    BEGIN TRANSACTION;

    DECLARE @idUsuario UNIQUEIDENTIFIER;

    SELECT @idUsuario = idUsuario
    FROM [dbo].[Administrativo]
    WHERE idAdministrativo = @idAdministrativo;

    UPDATE [dbo].[Usuario]
    SET
        nombre = @nombre,
        apellido = @apellido,
        email = @email,
        cedula = @cedula,
        telefono = @telefono,
        direccion = @direccion,
        fechaNacimiento = @fechaNacimiento,
        idEstado = @idEstadoUsuario
    WHERE idUsuario = @idUsuario;

   UPDATE [dbo].[Administrativo]
    SET
        idRol = @idRol,
        PasswordHash = CASE 
         WHEN @passwordHash IS NULL OR LTRIM(RTRIM(@passwordHash)) = '' 
         THEN PasswordHash 
         ELSE @passwordHash 
                       END,
        idEstado = @idEstadoAdministrativo
    WHERE idAdministrativo = @idAdministrativo;

    SELECT @idAdministrativo;

    COMMIT TRANSACTION;
END