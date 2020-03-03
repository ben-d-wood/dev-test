//Calling all the modules
var connect = require('connect');
var serveStatic = require('serve-static');
var expressModule = require('express')
var mysql = require('mysql')


var app = expressModule()


//Enable JSON to handle the request properties
app.use(expressModule.json())


//Conection to Database properties
function connectionTodb() {

	return mysql.createConnection({
		host:'localhost',
		user:'root',
		password:'',
		database:'guest'
	})

}


//Function for createTask controller
app.post('/app/controllers/createTask', (req, res) => {
	//Getting the properties of the JSON body from the request
	res.json({requestBody: req.body})

	const taskName = req.body.name
	const taskDescription = req.body.description
	const taskUser = req.body.user

	const connection = connectionTodb()

	connection.query("INSERT INTO guest.Tasks (name, description, user) VALUES (? , ?, ?)", [taskName, taskDescription, taskUser], (err, results, fields) => {
		if (err) {
			throw err;
			res.sendStatus(500)
			return
		}
	console.log("New task inserted", results.insertedId);
	})	
})


//Function for updateTask controller
app.post('/app/controllers/updateTask', (req, res) => {
	//Getting the properties of the JSON body from the request
	res.json({requestBody: req.body})

	const uptaskId = req.body.task_id
	const uptaskName = req.body.name
	const uptaskDescription = req.body.description
	const uptaskCompleted = req.body.completed
	const uptaskUser = req.body.user

	const connection = connectionTodb()

	connection.query("UPDATE guest.Tasks SET name = ?, description = ?, completed = ?, user = ? WHERE task_id = ?", [uptaskName, uptaskDescription, uptaskCompleted, uptaskUser, uptaskId], (err, results, fields) => {
		if (err) {
			throw err;
			res.sendStatus(500)
			return
		}
	console.log("Task updated", results.insertedId);
	})

		
})

//Function for deleteTask controller
app.post('/app/controllers/deleteTask', (req, res) => {
	//Getting the properties of the JSON body from the request
	res.json({requestBody: req.body})
	const deltaskId = req.body.task_id
	const connection = connectionTodb()

	connection.query("DELETE FROM guest.Tasks WHERE task_id = ? ", 
		[deltaskId], (err, results, fields) => {
		if (err) {
			throw err;
			res.sendStatus(500)
			return
		}
	console.log("Task deleted", results.insertedId);
	})
})


//Function for getTask providers	
app.get("/app/providers/getTasks", (req, res) => {

	const connection = connectionTodb()

	connection.query("SELECT * FROM guest.Tasks", (err, rows, fields) => {
		if (err) throw err;
		res.json(rows)
	})

})


app.use(serveStatic(__dirname + "/WebContent"), (req, res) =>{
	console.log('Server running on 8080...');	
})


app.listen(8080, function () {
  console.log('Server running on 8080...')
})



// Old version:

//connect().use(serveStatic(__dirname + "/WebContent")).listen(8080, function(){
//    console.log('Server running on 8080...');
//});