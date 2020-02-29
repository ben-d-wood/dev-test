INSERT INTO guest.Task (name, description, user)
VALUES('insert into test', 'test', 'Rob K')

<!-- being dynamic: 
INSERT INTO guest.Task (name, description, user)
VALUES ($1, $2, $3) -->