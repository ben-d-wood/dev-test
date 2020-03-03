<!-- SELECT * FROM Test.guest.Tasks WHERE user = 'Glen Larsen' -->
<%@ page import = "java.io.*,java.util.*,java.sql.*"%> <%@ page import =
"javax.servlet.http.*,javax.servlet.*" %> <%@ taglib
uri="http://java.sun.com/jsp/jstl/core" prefix = "c"%> <%@ taglib
uri="http://java.sun.com/jsp/jstl/sql" prefix = "sql"%>

<html>
  <head>
    <title>SELECT Operation</title>
  </head>

  <body>
    <sql:setDataSource
      var="snapshot"
      driver="com.mysql.jdbc.Driver"
      url="https://mywheeler.net/test/Taskmanager/app/providers/getTasks.jsp"
    />

    <sql:query dataSource="${snapshot}" var="result">
      SELECT * from Test.guest.Tasks WHERE user = 'Glen Larsen';
    </sql:query>
  </body>
</html>
