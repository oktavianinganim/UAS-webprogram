CREATE DATABASE IF NOT EXISTS calculator;

USE calculator;

CREATE TABLE IF NOT EXISTS calculations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    calculation VARCHAR(50),
    result FLOAT
);
