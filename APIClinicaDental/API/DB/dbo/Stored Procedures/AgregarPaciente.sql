-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE AgregarPaciente
	-- Add the parameters for the stored procedure here
	@idUsuario UNIQUEIDENTIFIER,
    @nombre VARCHAR(50),
    @apellido VARCHAR(50),
    @email VARCHAR(50),
    @cedula INT,
    @telefono INT,
    @direccion VARCHAR(100),
    @fechaNacimiento DATE,
    @idEstadoUsuario INT,

    @idPaciente UNIQUEIDENTIFIER,
    @grupoSangineo VARCHAR(10),
    @alergias VARCHAR(100),
    @observaciones VARCHAR(100),
    @idEstadoPaciente INT
AS
BEGIN
	SET NOCOUNT ON;

    BEGIN TRANSACTION;

    INSERT INTO [Usuario] (
        [idUsuario],
        [nombre],
        [apellido],
        [email],
        [cedula],
        [telefono],
        [direccion],
        [fechaNacimiento],
        [idEstado])
    VALUES (
        @idUsuario,
        @nombre,
        @apellido,
        @email,
        @cedula,
        @telefono,
        @direccion,
        @fechaNacimiento,
        @idEstadoUsuario);

    INSERT INTO [Paciente] (
        [idPaciente],
        [grupoSangineo],
        [alergias],
        [observaciones],
        [idUsuario],
        [idEstado])
    VALUES (
        @idPaciente,
        @grupoSangineo,
        @alergias,
        @observaciones,
        @idUsuario,
        @idEstadoPaciente);

    SELECT @idPaciente;

    COMMIT TRANSACTION;



END