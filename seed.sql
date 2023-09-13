-- Active: 1694557084551@@127.0.0.1@3306
USE `80sClassics`;

SET FOREIGN_KEY_CHECKS = 0;

TRUNCATE TABLE `movies`;
TRUNCATE TABLE `genres`;
TRUNCATE TABLE `movie_genres`;

INSERT INTO 80sClassics.movies (title) VALUES
    ("De Volta Para o Futuro"),
    ("Top Gun - Ases Indomáveis"), 
    ("Curtindo a Vida Adoidado");

INSERT INTO 80sClassics.genres (name) VALUES
    ("Ficção Científica"),
    ("Ação"),
    ("Comédia");

INSERT INTO 80sClassics.movie_genres (genre_id, movie_id) VALUES
    (1, 1),
    (2, 2),
    (3, 3);