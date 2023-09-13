-- Active: 1694557084551@@127.0.0.1@3306
USE `80sClassics`;

SET FOREIGN_KEY_CHECKS = 0;

TRUNCATE TABLE `movies`;
TRUNCATE TABLE `users`;
TRUNCATE TABLE `users_favorites`;

INSERT INTO 80sClassics.movies (title) VALUES
    ("De Volta Para o Futuro"),
    ("Top Gun - Ases Indomáveis"), 
    ("Curtindo a Vida Adoidado");

INSERT INTO 80sClassics.users (username) VALUES
    ("Marty McFly"),
    ("Maverick"),
    ("Ferris Bueller");

INSERT INTO 80sClassics.users_favorites (user_id, movie_id) VALUES
    (1, 1),
    (1, 2),
    (2, 2),
    (3, 3);