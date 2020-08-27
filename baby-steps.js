var entries = process.argv;

var i = 2;
var len = entries.length;
var sum = 0;

for (; i < len; i++) {
    sum += Number(entries[i])
}

console.log(sum)