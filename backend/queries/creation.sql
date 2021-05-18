CREATE TABLE usuarios(
	username varchar(50) PRIMARY KEY NOT NULL, 
	nombres varchar(50) NOT NULL, 
	apellidos varchar(50) NOT NULL);


CREATE TABLE padres(
	username varchar(50) UNIQUE, 
	id_padre serial PRIMARY KEY,
		CONSTRAINT fk_username
      	FOREIGN KEY (username)
        	REFERENCES usuarios(username));
        
CREATE TABLE cursos(
	id_curso serial PRIMARY key, 
	nombre varchar(50) UNIQUE NOT null);

        	
CREATE TABLE tutores(
	username varchar(50) UNIQUE, 
	id_tutor serial PRIMARY KEY,
		CONSTRAINT fk_username
      	FOREIGN KEY (username)
        	REFERENCES usuarios(username));
        	
CREATE TABLE imparte( 
	id_tutor int,
	id_curso int, 
	PRIMARY KEY (id_curso, id_tutor),
      CONSTRAINT fk_cursoId
      	FOREIGN KEY (id_curso)
        	REFERENCES cursos(id_curso),
      CONSTRAINT fk_tutor
      	FOREIGN KEY (id_tutor)
        	REFERENCES tutores(id_tutor));

	
CREATE TABLE calendarioT( 
	id_tutor int,
	id_calendario serial,
	dia varchar(9) NOT null,
	inicio TIME NOT NULL,
	fin TIME NOT NULL,
	estado BOOLEAN NOT NULL DEFAULT FALSE,
	PRIMARY KEY (id_calendario),
      CONSTRAINT fk_tutor
      	FOREIGN KEY (id_tutor)
        	REFERENCES tutores(id_tutor));
       

CREATE TABLE calendarioU( 
	id_padre int,
	id_calendario int,
	PRIMARY KEY (id_padre, id_calendario),
      CONSTRAINT fk_calendario
      	FOREIGN KEY (id_calendario)
        	REFERENCES calendarioT(id_calendario));