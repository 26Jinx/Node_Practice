'use strict'

const fs = require('fs');

const fileToRead = process.argv[2]

fs.readFile(fileToRead, 'utf-8', function doneReading(err, fileContents) {
    let linesCount = fileContents.split('\n').length - 1
    console.log(linesCount)
})