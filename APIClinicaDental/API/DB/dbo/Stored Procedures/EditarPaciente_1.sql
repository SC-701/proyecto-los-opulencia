-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[EditarPaciente]
	-- Add the parameters for the stored procedure here
     @idPaciente UNIQUEIDENTIFIER,
    @nombre VARCHAR(50),
    @apellido VARCHAR(50),
    @email VARCHAR(50),
    @cedula INT,
    @telefono INT,
    @direccion VARCHAR(100),
    @fechaNacimiento DATE,
    @idEstadoUsuario INT,
    @grupoSangineo VARCHAR(10),
    @alergias VARCHAR(100),
    @observaciones VARCHAR(100),
    @idEstadoPaciente INT
AS
BEGIN
	SET NOCOUNT ON;

      BEGIN TRANSACTION;

   DECLARE @idUsuario UNIQUEIDENTIFIER;

    SELECT @idUsuario = idUsuario
    FROM Paciente
    WHERE idPaciente = @idPaciente;

    UPDATE [dbo].[Usuario]
    SET
        [nombre] = @nombre,
        [apellido] = @apellido,
        [email] = @email,
        [cedula] = @cedula,
        [telefono] = @telefono,
        [direccion] = @direccion,
        [fechaNacimiento] = @fechaNacimiento,
        [idEstado] = @idEstadoUsuario
    WHERE [idUsuario] = @idUsuario;

    UPDATE [dbo].[Paciente]
    SET
        [grupoSangineo] = @grupoSangineo,
        [alergias] = @alergias,
        [observaciones] = @observaciones,
        [idEstado] = @idEstadoPaciente
    WHERE [idPaciente] = @idPaciente;

    SELECT @idPaciente;

    COMMIT TRANSACTION;

END