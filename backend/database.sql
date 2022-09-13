CREATE DATABASE docker_dev;

CREATE TABLE users(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);