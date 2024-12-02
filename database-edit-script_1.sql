\c jira

CREATE INDEX idx_tasks_epic ON tasks (epic_id);

ALTER TABLE tasks
    ADD COLUMN importance INT;

