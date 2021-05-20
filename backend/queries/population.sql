INSERT INTO tiposUsuario (nombre) VALUES 
	('Padre'),
	('Tutor');

INSERT INTO usuarios (nombre, correo, username, contraseña, tipo_usuario) VALUES 
	('Orlando Osberto', 'prueba@gmail.com', 'OOCM', crypt('noSequePoner', gen_salt('bf')), 1),
	('Diego Andres', 'prueba2@gmail.com', 'DiegoA', crypt('noSequePoner', gen_salt('bf')), 1),
	('Juan Jose', 'prueba3@gmail.com', 'JJSL', crypt('noSequePoner', gen_salt('bf')), 2),
	('Ana Sofia', 'prueba4@gmail.com', 'AS', crypt('noSequePoner', gen_salt('bf')), 2),
	('Alejandro Andres', 'prueba5@gmail.com', 'AA', crypt('noSequePoner', gen_salt('bf')), 1),
	('Maria Laura', 'prueba6@gmail.com', 'ML', crypt('noSequePoner', gen_salt('bf')), 2),
	('Orlando ', 'prueba7@gmail.com', 'OF', crypt('noSequePoner', gen_salt('bf')), 2),
	('Mauro', 'prueba8@gmail.com', 'MT', crypt('noSequePoner', gen_salt('bf')), 2),
	('Luis', 'prueba9@gmail.com', 'LA', crypt('noSequePoner', gen_salt('bf')), 2),
	('Norberto', 'prueba10@gmail.com', 'NB', crypt('noSequePoner', gen_salt('bf')), 2);



INSERT INTO padres (username) VALUES 
	('OOCM'),
	('DiegoA'),
	('AA');


INSERT INTO tutores (username) VALUES 
	('JJSL'),
	('AS'),
	('ML'),
	('OF'),
	('MT'),
	('LA'),
	('NB');


INSERT INTO cursos (nombre) VALUES 
	('Matematicas'),
	('Ciencias Sociales'),
	('Ciencias Naturales'),
	('Fisica'),
	('Estadistica'),
	('Ingles'),
	('Literatura');


INSERT INTO imparte VALUES 
	(1, 1),
	(1, 4),
	(1, 5),
	(2, 6),
	(2, 7),
	(3, 2),
	(3, 3),
	(4, 4),
	(4, 5),
	(5, 7),
	(5, 6),
	(6, 2),
	(6, 3),
	(7, 5),
	(7, 1);


INSERT INTO calendarioT (id_tutor, dia, inicio, fin, estado) VALUES 
	(1, 'Lunes', '14:00:00', '16:00:00', FALSE),
	(1, 'Martes', '14:00:00', '16:00:00', FALSE),
	(1, 'Miercoles', '14:00:00', '16:00:00', FALSE),
	(1, 'Jueves', '14:00:00', '16:00:00', FALSE),
	(1, 'Viernes', '14:00:00', '16:00:00', FALSE),
	(2, 'Lunes', '17:00:00', '19:00:00', TRUE),
	(2, 'Miercoles', '17:00:00', '19:00:00', true),
	(2, 'Viernes', '17:00:00', '19:00:00', true),
	(3, 'Sabado', '10:30:00', '12:00:00', FALSE),
	(3, 'Domingo', '10:30:00', '12:00:00', FALSE),
	(3, 'Domingo', '18:00:00', '22:00:00', FALSE),
	(4, 'Martes', '08:00:00', '12:00:00', FALSE),
	(4, 'Jueves', '08:00:00', '12:00:00', FALSE),
	(5, 'Martes', '13:00:00', '15:00:00', FALSE),
	(5, 'Miercoles', '13:00:00', '15:00:00', FALSE),
	(5, 'Jueves', '13:00:00', '15:00:00', FALSE),
	(5, 'Viernes', '13:00:00', '15:00:00', FALSE),
	(5, 'Sabado', '13:00:00', '15:00:00', FALSE),
	(5, 'Domingo', '13:00:00', '15:00:00', FALSE),
	(5, 'Lunes', '13:00:00', '15:00:00', FALSE),
	(6, 'Martes', '12:00:00', '17:00:00', FALSE),
	(7, 'Lunes', '15:00:00', '16:00:00', true),
	(7, 'Miercoles', '15:00:00', '16:00:00', true),
	(7, 'Viernes', '15:00:00', '16:00:00', true),
	(7, 'Domingo', '15:00:00', '16:00:00', true);


INSERT INTO calendarioU (id_padre, id_calendario) VALUES 
	(2, 6),
	(2, 7),
	(2, 8),
	(3, 22),
	(3, 23),
	(3, 24),
	(3, 25);
