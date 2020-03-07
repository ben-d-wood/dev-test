UPDATE Tasks
SET completed = getDate()
WHERE task_id = 5;

<!-- dynamic:
UPDATE Tasks
SET completed = getDate()
WHERE task_id = $1 -->