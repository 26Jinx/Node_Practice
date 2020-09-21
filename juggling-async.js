'use strict'

const http = require('http')
const bl = require('bl')
const urls = process.argv.slice(2)
let dataArray = []
let idx = 0

for (const u of urls) {
    
    http.get(u, function (response) {

        response.pipe(bl(function (err, data) {
            if (err) {
                return console.error(err)
            }

            console.log(data.toString())
        }))
    })
}

