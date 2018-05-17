CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burger (
    id int NOT NULL AUTO_INCREMENT,
    buerger_name VARCHAR(250) NOT NULL,
    devoured BOOLEAN DEFAULT false
);
