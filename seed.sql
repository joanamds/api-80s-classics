USE `80sClassics`;

SET FOREIGN_KEY_CHECKS = 0;

TRUNCATE TABLE `movies`;
TRUNCATE TABLE `users`;
TRUNCATE TABLE `users_favorites`;

INSERT INTO 80sClassics.movies (name) VALUES
    ("De Volta Para o Futuro"),
    ("Top Gun - Ases Indomáveis"), 
    ("Curtindo a Vida Adoidado"),

INSERT INTO 80sClassics.users (name) VALUES
    ("Marty McFly"),
    ("Maverick"),
    ("Ferris Bueller");

INSERT INTO 80sClassics.users_favorites (user_id, movie_id) VALUES
    (1, 1),
    (1, 2),
    (2, 2),
    (3, 3);