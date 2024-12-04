/*Queries*/
CREATE DATABASE IF NOT EXISTS companydb;
USE companydb;
CREATE TABLE employee (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(40) DEFAULT NULL,
    salary INT(10) DEFAULT NULL,
    PRIMARY KEY (id)
);
DESCRIBE employee; /*Ver tabla*/

INSERT INTO employee VALUES
(1, 'John', 1000),
(2, 'Mary', 2000),
(3, 'Tom', 3000),
(4, 'Peter', 4000),
(5, 'Ann', 5000);