Create PROCEDURE [dbo].[EditarDoctor]
    @idDoctor UNIQUEIDENTIFIER,
    @nombre VARCHAR(50),
    @apellido VARCHAR(50),
    @email VARCHAR(50),
    @cedula INT,
    @telefono INT,
    @direccion VARCHAR(100),
    @fechaNacimiento DATE,
    @idEstadoUsuario INT,
    @especialidad VARCHAR(50),
    @licenciaProfesional VARCHAR(50),
    @fechaInicio DATE,
    @idServicio UNIQUEIDENTIFIER,
    @idEstadoDoctor INT
AS
BEGIN
    SET NOCOUNT ON;
    BEGIN TRANSACTION;

    DECLARE @idUsuario UNIQUEIDENTIFIER;

    SELECT @idUsuario = idUsuario
    FROM Doctor
    WHERE idDoctor = @idDoctor;

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

    UPDATE [dbo].[Doctor]
    SET
        especialidad = @especialidad,
        licenciaProfesional = @licenciaProfesional,
        fechaInicio = @fechaInicio,
        idServicio = @idServicio,
        idEstado = @idEstadoDoctor
    WHERE idDoctor = @idDoctor;

    SELECT @idDoctor;

    COMMIT TRANSACTION;
END