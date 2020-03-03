/* Replace the contents of this file with the SQL for this backend controller / provider */
<%
@Path("/getTasks")
public class UserResource {
    UserService userService = new UserService();
 
    // CRUD -- CREATE operation
    @POST
    @Produces(MediaType.TEXT_XML)
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public User createUser(@FormParam("id") String id,@FormParam("name") String
                                                          name,@FormParam("age") int age)      
        {
        User user = new User();
        user.setId(id);
        user.setName(name);
        user.setAge(age);
        User userResponse = userService.createUser(user);
        return userResponse;
    }
 
    // CRUD -- READ operation
    @GET
    @Produces(MediaType.APPLICATION_XML)
    public List<User> getAllUsers() {
        List<User> userList = userService.getAllUsers();
        return userList;
    }
 
 
    // CRUD -- UPDATE operation
    @PUT
    @Produces(MediaType.TEXT_XML)
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public User updateUser(@FormParam("id") String id,@FormParam("name") String
                                                         name,@FormParam("age") int age)
       {
        User user = userService.getUserForId(id);
        user.setName(name);
        user.setAge(age);
        User userResponse = userService.updateUser(user);
        return userResponse;
    }
 
    // CRUD -- DELETE operation
    @DELETE
    @Produces(MediaType.TEXT_XML)
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public User deleteeUser(@FormParam("id") String id) {
        User userResponse = userService.deleteUser(id);
        return userResponse;
    }
}
%>