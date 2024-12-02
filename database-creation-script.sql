CREATE DATABASE jira;

\c jira

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50),
    name VARCHAR(250),
    avatar VARCHAR(500)
);

CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    name VARCHAR(250),
    epic_id INT,
    user_id INT
);

CREATE TABLE epics (
    id SERIAL PRIMARY KEY,
    name VARCHAR(250),
    description TEXT,
    due DATE
);

CREATE TABLE tags (
    id SERIAL PRIMARY KEY,
    name VARCHAR(250)
);

CREATE TABLE tasks_tags (
    id SERIAL PRIMARY KEY,
    task INT,
    tag INT
);

ALTER TABLE tasks
    ADD CONSTRAINT fk_task_user
    FOREIGN KEY (user_id)
    REFERENCES users (id);

ALTER TABLE tasks
    ADD CONSTRAINT fk_task_epic
    FOREIGN KEY (epic_id)
    REFERENCES epics (id);

ALTER TABLE tasks_tags
    ADD CONSTRAINT fk_tasks_tags_tag
    FOREIGN KEY (tag)
    REFERENCES tags (id);

ALTER TABLE tasks_tags
    ADD CONSTRAINT fk_tasks_tags_task
    FOREIGN KEY (task)
    REFERENCES tasks (id);