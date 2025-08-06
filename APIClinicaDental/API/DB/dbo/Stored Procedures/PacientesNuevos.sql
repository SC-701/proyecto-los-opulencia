-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [PacientesNuevos]
	-- Add the parameters for the stored procedure here
	
AS
BEGIN
	SELECT COUNT(*) AS cantidadPacientesNuevos
    FROM Paciente p
    INNER JOIN Usuario u ON p.idUsuario = u.idUsuario
    WHERE 
        MONTH(u.fechaCreacion) = MONTH(GETDATE()) AND
        YEAR(u.fechaCreacion) = YEAR(GETDATE());
END