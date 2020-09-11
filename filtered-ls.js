'use strict'

const fs = require('fs')
const path = require('path')
const directory = process.argv[2]
const fileExt = process.argv[3]

fs.readdir(directory, function doneReading(err, list) {
    for (const f of list) {
        if (path.extname(f) == "." + fileExt) {
            console.log(f)
        }
    }
})