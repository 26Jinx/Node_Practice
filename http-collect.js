'use strict'

const http = require('http');
const bl = require('bl');
const url = process.argv[2]

http.get(url, function(response) {
    response.pipe(bl(function (err, data) {
        if (err) {
            return err
        }

        let data_str = data.toString()

        console.log(data_str.length)
        console.log(data_str)
    }))
})