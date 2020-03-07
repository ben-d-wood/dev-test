<%@ page import = "java.io.*,java.util.*,java.sql.*"%> <%@ page import =
"javax.servlet.http.*,javax.servlet.*" %> <%@ taglib
uri="http://java.sun.com/jsp/jstl/core" prefix = "c"%> <%@ taglib
uri="http://java.sun.com/jsp/jstl/sql" prefix = "sql"%>

<html>
  <head>
    <title>DELETE Operation</title>
  </head>

  <body>
    <sql:setDataSource
      var="snapshot"
      driver="com.mysql.jdbc.Driver"
      url="https://mywheeler.net/test/Taskmanager/app/controllers/deleteTask.jsp"
    />

    <sql:update dataSource="${snapshot}" var="count">
      DELETE FROM Test.guest.Tasks WHERE task_id = ?
    </sql:update>
  </body>
</html>
