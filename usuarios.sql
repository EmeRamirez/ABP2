-- Active: 1680180900307@@127.0.0.1@5432@abp2
CREATE DATABASE abp2;

CREATE TABLE usuarios(
    idusuario SERIAL NOT NULL PRIMARY KEY,
    nombre  VARCHAR(50) NOT NULL
);