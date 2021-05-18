INSERT INTO usuarios (nombres, apellidos, username) VALUES 
	('Orlando Osberto', 'Cabrera Mejia', 'OOCM'),
	('Diego Andres', 'Hernandez Estrada', 'DiegoA'),
	('Juan Jose', 'Santizo Lopez', 'JJSL'),
	('Ana Sofia', 'Barrera Estrada', 'AS'),
	('Alejandro Andres', 'Morales Corado', 'AA');


INSERT INTO usuarios (nombres, apellidos, username) VALUES 
	('Maria Laura', 'Velazques Porras', 'ML'),
	('Orlando ', 'Fariña', 'OF'),
	('Mauro', 'Tejera', 'MT'),
	('Luis', 'Alvarez', 'LA'),
	('Norberto', 'Barroso', 'NB');


INSERT INTO padres (username) VALUES 
	('OOCM'),
	('DiegoA'),
	('AA');


INSERT INTO tutores (username) VALUES 
	('JJSL'),
	('AS');

INSERT INTO tutores (username) VALUES 
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


INSERT INTO calendarioT (id_tutor, dia, inicio, fin) VALUES 
	(1, 'Lunes', '14:00:00', '16:00:00'),
	(1, 'Martes', '14:00:00', '16:00:00'),
	(1, 'Miercoles', '14:00:00', '16:00:00'),
	(1, 'Jueves', '14:00:00', '16:00:00'),
	(1, 'Viernes', '14:00:00', '16:00:00'),
	(2, 'Lunes', '17:00:00', '19:00:00'),
	(2, 'Miercoles', '17:00:00', '19:00:00'),
	(2, 'Viernes', '17:00:00', '19:00:00'),
	(3, 'Sabado', '10:30:00', '12:00:00'),
	(3, 'Domingo', '10:30:00', '12:00:00'),
	(3, 'Domingo', '18:00:00', '22:00:00'),
	(4, 'Martes', '08:00:00', '12:00:00'),
	(4, 'Jueves', '08:00:00', '12:00:00'),
	(5, 'Martes', '13:00:00', '15:00:00'),
	(5, 'Miercoles', '13:00:00', '15:00:00'),
	(5, 'Jueves', '13:00:00', '15:00:00'),
	(5, 'Viernes', '13:00:00', '15:00:00'),
	(5, 'Sabado', '13:00:00', '15:00:00'),
	(5, 'Domingo', '13:00:00', '15:00:00'),
	(5, 'Lunes', '13:00:00', '15:00:00'),
	(6, 'Martes', '12:00:00', '17:00:00'),
	(7, 'Lunes', '15:00:00', '16:00:00'),
	(7, 'Miercoles', '15:00:00', '16:00:00'),
	(7, 'Viernes', '15:00:00', '16:00:00'),
	(7, 'Domingo', '15:00:00', '16:00:00');

INSERT INTO calendarioU (id_padre, id_calendario) VALUES 
	(2, 6),
	(2, 7),
	(2, 8),
	(3, 22),
	(3, 23),
	(3, 24),
	(3, 25);
