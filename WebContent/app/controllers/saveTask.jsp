INSERT INTO Task (name, description, user)
VALUES('insert into test', 'test', 'Rob')

<!-- being dynamic: 
INSERT INTO Tasks (name, description, user)
VALUES ($1, $2, $3) -->