-- Active: 1694557084551@@127.0.0.1@3306
DROP DATABASE IF EXISTS 80sClassics;

CREATE DATABASE 80sClassics;

USE 80sClassics;

CREATE TABLE movies (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
) ENGINE=InnoDB;

CREATE TABLE genres (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
) ENGINE=InnoDB;

CREATE TABLE movie_genres (
    genre_id INT NOT NULL,
    movie_id INT NOT NULL,
    PRIMARY KEY (genre_id, movie_id),
    FOREIGN KEY (genre_id) REFERENCES genres(id),
    FOREIGN KEY (movie_id) REFERENCES movies(id)
) ENGINE=InnoDB;

SET SQL_SAFE_UPDATES = 0;
