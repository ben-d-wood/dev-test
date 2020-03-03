// required packages
var connect = require('connect');
var serveStatic = require('serve-static');
let port = 8080;
let app = connect();

app.use(serveStatic(__dirname + "/WebContent")).listen(port, function(){
    console.log('Server running on 8080...');
});

app.use('/foo', function fooMiddleware(req, res, next) {
    res.end('hello world');
    next();
});

// var server = http.createServer(app);

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.writeHead(200, {'Content-Type': 'text/html'}); // http header
//     res.setHeader('Access-Control-Allow-Origin:', '*');
//     res.end('Hello World');
//   });

// http.createServer((req, res) => {
//   const headers = {
//     'Access-Control-Allow-Origin': '*',
//     'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
//     'Access-Control-Max-Age': 2592000, // 30 days
//     /** add other headers as per requirement */
//   };

//   if (req.method === 'OPTIONS') {
//     res.writeHead(204, headers);
//     res.end();
//     return;
//   }

//   if (['GET', 'POST'].indexOf(req.method) > -1) {
//     res.writeHead(200, headers);
//     res.end('Hello World');
//     return;
//   }

//   res.writeHead(405, headers);
//   res.end(`${req.method} is not allowed for the request.`);
// });