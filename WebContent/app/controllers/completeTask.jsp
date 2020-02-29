UPDATE guest.Tasks
SET completed = '2020-02-29'
WHERE task_id = 1;

<!-- Typically I would write this to be dynamic to accept any
values replacing the '2020-02-29 with $1 and the id of 1 with
$2 -->