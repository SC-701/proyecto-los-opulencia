cREATE PROCEDURE [dbo].[AgregarDoctor]
    @idUsuario           UNIQUEIDENTIFIER,
    @nombre              VARCHAR(50),
    @apellido            VARCHAR(50),
    @email               VARCHAR(50),
    @cedula              INT,
    @telefono            INT,
    @direccion           VARCHAR(100),
    @fechaNacimiento     DATE,
    @idEstadoUsuario     INT,

    @idDoctor            UNIQUEIDENTIFIER,
    @especialidad        VARCHAR(50),
    @licenciaProfesional VARCHAR(50),
    @fechaInicio         DATE,
    @idServicio          UNIQUEIDENTIFIER,
    @idEstadoDoctor      INT
AS
BEGIN
    SET NOCOUNT ON;

    BEGIN TRANSACTION;

    INSERT INTO [dbo].[Usuario] (
        [idUsuario],
        [nombre],
        [apellido],
        [email],
        [cedula],
        [telefono],
        [direccion],
        [fechaNacimiento],
        [idEstado]
    )
    VALUES (
        @idUsuario,
        @nombre,
        @apellido,
        @email,
        @cedula,
        @telefono,
        @direccion,
        @fechaNacimiento,
        @idEstadoUsuario
    );

    INSERT INTO [dbo].[Doctor] (
        [idDoctor],
        [especialidad],
        [licenciaProfesional],
        [fechaInicio],
        [idUsuario],
        [idServicio],
        [idEstado]
    )
    VALUES (
        @idDoctor,
        @especialidad,
        @licenciaProfesional,
        @fechaInicio,
        @idUsuario,
        @idServicio,
        @idEstadoDoctor
    );

 
    SELECT @idDoctor;

    COMMIT TRANSACTION;
END