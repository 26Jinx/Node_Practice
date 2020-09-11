'use strict'

const mymodule = require('./mymodule.js')
const dir = process.argv[2]
const extName = process.argv[3]

mymodule(dir, extName, function (err, data) {
    if (err) {
        console.log("There was an error processing your request.")
    }

})
