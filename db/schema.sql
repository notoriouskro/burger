
-- Create the database burger_db and specified it for use.
CREATE DATABASE burgers_db;
USE burgers_db;

-- Create the table burgers.
CREATE TABLE burgers
(
id INTEGER NOT NULL AUTO_INCREMENT,
burgerName varchar(255) NOT NULL,
devoured BOOLEAN DEFAULT false,
PRIMARY KEY (id)
);


