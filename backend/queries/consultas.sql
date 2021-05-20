SELECT * FROM calendariot c ;      
SELECT * FROM calendarioU c ;  
SELECT * FROM padres;       
SELECT * FROM cursos c ;
SELECT * FROM tutores t2 ;
SELECT * FROM usuarios u ;
SELECT * FROM imparte i ;

-- Funcion para obtener los datos del padre
CREATE OR REPLACE FUNCTION parents_Description(varchar(50))
RETURNS table(username varchar(50), nombre varchar(50)) AS
$$
   SELECT u.username, u.nombre FROM usuarios u
	INNER JOIN padres p ON u.username = p.username 
	WHERE u.username = $1;
$$ LANGUAGE 'sql';

SELECT * FROM parents_Description('AA'); 

-- Funcion para obtener el calendario del padre
SELECT DISTINCT ON  (1) c2.dia, c2.inicio, c2.fin, t2.username, c3.nombre AS curso FROM padres p 
		INNER JOIN calendariou c on c.id_padre =p.id_padre
		INNER JOIN calendariot c2 ON c.id_calendario = c2.id_calendario 
		INNER JOIN tutores t2 ON t2.id_tutor = c2.id_tutor 
		INNER JOIN imparte i2 ON i2.id_tutor = t2.id_tutor 
		INNER JOIN cursos c3 ON i2.id_curso = c3.id_curso 
	WHERE p.username = 'AA';

CREATE OR REPLACE FUNCTION parents_Calendar(varchar(50))
RETURNS table(dia varchar(9), inicio time, fin time,tutor varchar(50), curso varchar(50)) AS
$$
   SELECT DISTINCT ON (1) c2.dia, c2.inicio, c2.fin, t2.username, c3.nombre AS curso FROM padres p 
		INNER JOIN calendariou c on c.id_padre =p.id_padre
		INNER JOIN calendariot c2 ON c.id_calendario = c2.id_calendario 
		INNER JOIN tutores t2 ON t2.id_tutor = c2.id_tutor 
		INNER JOIN imparte i2 ON i2.id_tutor = t2.id_tutor 
		INNER JOIN cursos c3 ON i2.id_curso = c3.id_curso 
	WHERE p.username = $1;
$$ LANGUAGE 'sql';

SELECT * FROM parents_Calendar('AA');

-- Funcion para obtener todos los datos de un tutor (Nombre de usuario, nombre y sus cursos)
CREATE OR REPLACE FUNCTION tutor_Description(varchar(50))
RETURNS table(username varchar(50), nombre varchar(50) ,cursos text) AS
$$
   SELECT u.username, u.nombre ,(SELECT ARRAY(SELECT c.nombre FROM usuarios u 
		INNER JOIN tutores t ON u.username = t.username
		INNER JOIN imparte i ON i.id_tutor = t.id_tutor 
		INNER JOIN cursos c ON c.id_curso = i.id_curso 
	WHERE t.username =$1)) AS cursos FROM usuarios u 
		INNER JOIN tutores t ON u.username = t.username
	WHERE t.username = $1;
$$ LANGUAGE 'sql';

SELECT * FROM tutor_description('JJSL'); 


-- Query para obtener el horario de un tutor
SELECT c.dia, c.inicio, c.fin, c.estado FROM tutores t 
	INNER JOIN calendariot c ON c.id_tutor = t.id_tutor 
	WHERE t.username = 'JJSL';

-- Login

CREATE OR REPLACE FUNCTION login(nombreUsuario varchar(50), contraseñaUsuario text)
RETURNS table(username varchar(50), nombre varchar(50)) AS
$$
	BEGIN
		RETURN QUERY SELECT u.username, u.nombre FROM usuarios u WHERE u.username = nombreUsuario AND u.contraseña = crypt(contraseñaUsuario, u.contraseña);
		IF NOT FOUND THEN
    		RAISE EXCEPTION 'Nombre de usuario o contraseña incorrectos';
		END IF;
		RETURN;
  	END;
$$ LANGUAGE plpgsql;

SELECT username, nombre FROM usuarios WHERE username = 'AA' AND contraseña = crypt('noSequePoner', contraseña);

SELECT * FROM login('AA', 'noSequePoner');

-- Register

CREATE OR REPLACE FUNCTION new_Parent(varchar(50),varchar(50),varchar(50), text)
RETURNS void AS
$$
   INSERT INTO usuarios (nombre, username, contraseña,correo, tipo_usuario) VALUES 
	($1, $2, $3, $4, 1);
	INSERT INTO padres (username) VALUES 
	($3);
$$ LANGUAGE 'sql';
--Trigger para cambiar el estado de un horario de tutor cuando se selecciona
CREATE OR REPLACE FUNCTION agregar_Turoria() RETURNS TRIGGER AS $horario_tutor$
BEGIN 
   UPDATE calendariot SET estado = TRUE WHERE id_calendario = NEW.id_calendario;
   RETURN NEW;
 END;
$horario_tutor$ LANGUAGE plpgsql;

CREATE TRIGGER horario_tutor AFTER INSERT ON calendariou
FOR EACH ROW EXECUTE PROCEDURE agregar_Turoria();