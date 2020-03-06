UPDATE TABLE guest.Tasks

SET completed = CURRENT_DATE

WHERE task_id = @task_id

-- The WHERE clause will be syntactically different, depending on the database platform that is being used