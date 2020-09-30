'use strict';

const http = require('http');
const url = require('url');
const port = process.argv[2];

let server = http.createServer(function(request, response) {
    // set the Content-Type
    response.writeHead(200, { 'Content-Type': 'application/json' });

    // parse request url
    let myUrl = new URL(request.url.toString());
    response.end(myUrl);

    // first endpoint

    // second endpoint
    // console.log(new URL('/test?q=1', 'http://example.com'));
})

server.listen(port);