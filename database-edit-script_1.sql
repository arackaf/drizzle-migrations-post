\c jira

CREATE INDEX idx_tasks_epic ON tasks (epicId);

ALTER TABLE tasks
    ADD COLUMN importance INT;

