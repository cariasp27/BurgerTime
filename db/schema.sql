CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers (
  id int(11)  AUTO_INCREMENT NOT NULL,
  burger_name VARCHAR(255),
  devoured BOOLEAN NOT NULL,
  PRIMARY KEY (id)
);