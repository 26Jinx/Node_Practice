const fs = require('fs')

var file_to_read = process.argv[2]

var buf = fs.readFileSync(file_to_read)

const str = buf.toString()

var n_lines = str.split('\n')

console.log(n_lines.length - 1)