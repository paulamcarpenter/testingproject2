### Schema

CREATE DATABASE church_db;
USE church_db;

CREATE TABLE churches
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(50) NOT NULL,
	address varchar(50) NOT NULL,
	city varchar(50) NOT NULL,
	state varchar(2) NOT NULL,
	zip integer(5) NOT NULL,
	url varchar(50) NOT NULL,
	size integer(10) NOT NULL,
	denomination varchar(50) NOT NULL,
	PRIMARY KEY (id)
);