'use strict';

const http = require('http');
const url = require('url');
const port = process.argv[2];

let server = http.createServer(function(request, response) {
    // set the Content-Type
    response.writeHead(200, { 'Content-Type': 'application/json' });

    // parse request url
    let parsedUrl = url.parse(request.url, true);
    let queryDate = parsedUrl.query.iso;
    let responseObj = {};

    // first endpoint
    if (parsedUrl.pathname.includes('parsetime')) {
        // format the query string as a Date object
        const fmtTime = new Date(queryDate);

        // create the response object to send back
        responseObj = {
            'hour': fmtTime.getHours(),
            'minute': fmtTime.getMinutes(),
            'second': fmtTime.getSeconds()
        }
        
        // stringify the object and close connection
        response.end(JSON.stringify(responseObj));
    }
    // second endpoint
    if (parsedUrl.pathname.includes('unixtime')) {
        const fmtTime = new Date(queryDate);

        // response object with UNIX time
        responseObj = {
            'unixtime': fmtTime.getTime()
        }

        response.end(JSON.stringify(responseObj));
    }
})

server.listen(port);