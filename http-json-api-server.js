'use strict';

const http = require('http');
const url = require('url');
const port = process.argv[2];

let server = http.createServer(function(request, response) {
    // set the Content-Type
    response.writeHead(200, { 'Content-Type': 'application/json' });

    // parse request url
    let parsedUrl = url.parse(request.url, true);

    // first endpoint
    if (parsedUrl.pathname.includes('parsetime')) {
        response.end(console.log(parsedUrl.query.iso));
    }
    // second endpoint
    if (parsedUrl.pathname.includes('unixtime')) {
        response.end(console.log(parsedUrl.query.iso));
    }
})

server.listen(port);