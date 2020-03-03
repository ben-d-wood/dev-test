var connect = require('connect');
var serveStatic = require('serve-static');
var express = require('express');
var app = express();
var axios = require('axios');
var cors = require('cors');
const bodyParser = require('body-parser');

connect().use(serveStatic(__dirname + "/WebContent")).listen(8080, function(){
    console.log('Server running on 8080...');
});

app.use(cors());
app.use(bodyParser.json());

app.listen(3000, () => {
 console.log("Server running on port 3000");
});

// get all tasks for Jordan Rand
app.get('/app/providers/getTasks', (req, res, next) => {
    async function getTasks() {
        await axios.get('https://mywheeler.net/test/Taskmanager/app/providers/getTasks.jsp?user=Jordan Rand')
        .then((response) => {
            
            console.log(response.data)
            res.json(response.data)
        })
        .catch((error) => {
            error
        });
    }
    getTasks();
});

// create new task
app.post('/app/controllers/saveTask', (req, res, next) => {
    async function saveTask() {
        let response = await axios.post(`https://mywheeler.net/test/Taskmanager/app/controllers/createTask.jsp?name=${req.body.name}&description=${req.body.description}&completed=${req.body.completed}&user=${req.body.user}`, 
        {
            body: req.body
        })
        .then((response) => {
            // console.log(response)
            res.json(response.data)
        })
        .catch((error) => {
            console.error('Error:', error);
        });
        res.json(response)
    }
    saveTask();
});

// update completed column
app.put('/app/controllers/completeTask', (req, res, next) => {
    async function completeTask() {
        let response = await axios.post(`https://mywheeler.net/test/Taskmanager/app/controllers/updateTask.jsp?task_id=${req.body.task_id}&completed=${req.body.completed}&user=${req.body.user}`, 
        {
            data: req.body
        })
        .then((response) => {
            // console.log(response)
            res.json(response.data)
        })
        .catch((error) => {
            console.error('Error:', error);
        });
        res.json(response)
    }
    completeTask();
});

//404 error on mywheeler.net
app.delete('/app/controllers/deleteTask', (req, res, next) => {
    async function deleteTask() {
        let response = await axios.delete(`https://mywheeler.net/test/Taskmanager/app/controllers/deleteTask.jsp?task_id=${req.body.task_id}&user=${req.body.user}`, 
        {
            data: req.body
        })
        .then((response) => {
            // console.log(response)
            res.json(response.data)
        })
        .catch((error) => {
            console.error('Error:', error);
        });
        res.json(response)
    }
    deleteTask();
});