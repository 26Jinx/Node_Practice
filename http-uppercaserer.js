'use strict'

const http = require('http');
const map = require('through2-map');
const port = process.argv[2];

const server = http.createServer(function (req, res) {
    // This server only repons to a POST request
    if (req !== 'POST') {
        return res.end('Gotta be a POST!\n')
    }

    // read request body, convert to UPPERCASE, send back strings with response
    req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
    })).pipe(res)
})

server.listen(port);