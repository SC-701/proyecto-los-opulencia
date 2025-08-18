-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE AgregarAdministrativo
	
	 @idUsuario UNIQUEIDENTIFIER,
    @nombre VARCHAR(50),
    @apellido VARCHAR(50),
    @email VARCHAR(50),
    @cedula INT,
    @telefono INT,
    @direccion VARCHAR(100),
    @fechaNacimiento DATE,
    @idEstadoUsuario INT,

    @idAdministrativo UNIQUEIDENTIFIER,
    @idRol INT,
    @passwordHash VARCHAR(MAX),
    @idEstadoAdministrativo INT
AS
BEGIN
	 INSERT INTO [Usuario] (
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

        INSERT INTO [Administrativo] (
            [idAdministrativo],
            [idUsuario],
            [idEstado],
            [idRol],
            [PasswordHash]
        )
        VALUES (
            @idAdministrativo,
            @idUsuario,
            @idEstadoAdministrativo,
            @idRol,
            @passwordHash
        );

        SELECT @idAdministrativo;

    COMMIT TRANSACTION;
END