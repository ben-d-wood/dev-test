<!-- INSERT INTO Test.guest.Tasks (name, description, user) VALUES ('$1', '$2', 'Glen
Larsen') -->

<%@ page import = "java.io.*,java.util.*,java.sql.*"%> <%@ page import =
"javax.servlet.http.*,javax.servlet.*" %> <%@ taglib
uri="http://java.sun.com/jsp/jstl/core" prefix = "c"%> <%@ taglib
uri="http://java.sun.com/jsp/jstl/sql" prefix = "sql"%>

<html>
  <head>
    <title>INSERT Operation</title>
  </head>

  <body>
    <sql:setDataSource
      var="snapshot"
      driver="com.mysql.jdbc.Driver"
      url="https://mywheeler.net/test/Taskmanager/app/controllers/createTask.jsp"
    />
    <sql:update dataSource="${snapshot}" var="result">
      INSERT INTO Test.guest.Tasks (name, description, user) VALUES ($1, $2,
      'Glen Larsen');
    </sql:update>
  </body>
</html>
