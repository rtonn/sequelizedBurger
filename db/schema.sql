
CREATE DATABASE sqlzburgers_db;

USE sqlzburgers_db; 

CREATE TABLE burgers (
id INTEGER NOT NULL AUTO_INCREMENT,
burger_name VARCHAR(255) NOT NULL, 
devoured BOOLEAN DEFAULT false,
PRIMARY KEY (id)
); 


INSERT into burgers (burger_name, devoured)
VALUES ("Cheeseburger", false),
	   ("California Burger", false),
       ("Plain Hamburger", true),
       ("Bacon Cheeseburger", true)