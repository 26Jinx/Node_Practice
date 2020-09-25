'use strict'

const http = require('http');
const fs = require('fs');
const port = process.argv[2];
const file = process.argv[3];

const server = http.createServer(function (request, response) {
    response.writeHead(200, { 'content-type': 'text/plain' })
    // first need to find something to send back in response
    // the 'something' is a file given by the command line argument
    // fs.createReadStream() will create the stream representing the file given by 
    // the command line argument
    let stream = fs.createReadStream(file);

    // now pipe the fs stream to the response stream so that the server can
    // serve up the files
    stream.pipe(response);
})

server.listen(port);

