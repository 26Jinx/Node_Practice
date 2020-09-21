'use strict'

const http = require('http')
const bl = require('bl')
const urls = process.argv.slice(2)
let dataArr = []
let idx = 0

// iterate through each of the urls passed in
for (const u of urls) {
    // send a get request to url
    http.get(u, function (response) {

        // once response received, wait until all of the data is received
        response.pipe(bl(function (err, data) {

            if (err) {
                return console.error(err)
            }

            // insert the data string to dataArr array in the order that
            // the request was sent
            dataArr.splice(idx, 0, data.toString())
            idx++    // increment index once all data is received 

            // print each data string only when all data is recorded
            if (dataArr.length == 3) {
                dataArr.forEach(element => console.log(element))
            }
        }))
    })

}

