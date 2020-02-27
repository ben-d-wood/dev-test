# Junior Developer Challenge

In this repository I have created a simple todo app. The app is written using the [Polymer 1.0 library](https://polymer-library.polymer-project.org/1.0/docs/devguide/feature-overview). Parts of the app are finished and some parts are left unfinished. I have added comments in the code to indicate where work needs to be done.

Fork this project and browse the code. make changes to the project and then when ready submit a pull request back to the original project with your solution. The deadline for the challenge is March 2nd, 2020 by 5:00pm Mountain Time.

## Database

The app has a single table as a backend. The table is in the "test" database under the "guest" schema. The table definition is as follows:

    CREATE TABLE [guest].[Tasks]  ( 
      [task_id]    	int IDENTITY(1,1) NOT NULL,
      [name]       	varchar(40) NOT NULL,
      [description]	varchar(500) NOT NULL,
      [completed]  	date NULL,
      [user]       	varchar(25) NULL,
      CONSTRAINT [PK_GEUST_TASKS_ID] PRIMARY KEY CLUSTERED([task_id])
    )

When you are selecting and creating tasks pass your name as the user so that you do not cause problems with the other applicants. Also ensure that the SQL you write takes your user into account as well.

While developing the challenge you can point the network requests to the controllers and providers provided at this url:
  https://mywheeler.net/test/Taskmanager/
  
With the following controllers/providers:


  app/controllers/createTask.jsp
  
  app/controllers/updateTask.jsp
  
  app/providers/getTasks.jsp
  
### Bonus

As a bonus you can add a component to the app that displays the task and its description in a panel when the task name is clicked in the task list.

(Not completing the bonus will not exclude you from consideration)

if you have any questions please email me, use the subject "Developer Challenge" 




Thanks

Ben Wood

bwood@campbellcompanies.com

Web Development Manager

Campbell Companies
