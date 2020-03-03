<!-- Grab dynamic vars for sql to replace [MYVAR]
<sql:query var="ID" dataSource="jdbc/myDatasource">
    SELECT max(id) as maxid FROM table1
</sql:query>
-->

INSERT INTO guest (name, description, completed, user) 
VALUES ([NAME], [DESCRIPTION], [COMPLETED], "Jordan Rand");

INSERT INTO guest (name, description, completed, user) 
VALUES ("Complete dev test", "follow the instructions and complete the test", "2020-03-03 00:00:00.000", "Jordan Rand");