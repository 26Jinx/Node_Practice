'use strict'

const mymodule = require('./mymodule.js')
const dir = process.argv[2]
const extName = process.argv[3]

function printList(err, lst) {
    if (err) {
        console.log("error")
    }

    for (const item of lst) {
        console.log(item)
    }
}

mymodule(dir, extName, printList)
