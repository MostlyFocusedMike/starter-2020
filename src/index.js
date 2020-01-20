const http = require('http');
/*
This endpoint is literally just to keep a node docker
server running so that we can use knex and objection
migrations and seeds whenever we want
*/
http.createServer((req, res) => {
    res.write('Node server is running');
    res.end();
}).listen(8000);
