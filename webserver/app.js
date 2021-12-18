const http = require('http');;

http.createServer( (request, response) => {
    response.write("Hello World");
    console.log(request);
    response.end();
}).listen(8080);

console.log("Listening at port", 8080); 