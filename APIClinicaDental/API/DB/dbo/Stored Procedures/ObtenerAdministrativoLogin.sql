-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE ObtenerAdministrativoLogin
@CorreoElectronico VARCHAR(50)
AS
BEGIN

	SET NOCOUNT ON;
	  SELECT
        A.idAdministrativo,
        U.nombre,
        U.apellido,
        U.email,
        A.PasswordHash
    FROM dbo.Administrativo A
    INNER JOIN dbo.Usuario U ON U.idUsuario = A.idUsuario
    WHERE U.email = @CorreoElectronico;
END