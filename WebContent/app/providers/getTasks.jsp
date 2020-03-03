/* All tasks from specific user */
SELECT * from guest
WHERE user = "Jordan Rand";

/* One task from specific user */
SELECT * from guest
WHERE user = "Jordan Rand" AND task_id = 507;