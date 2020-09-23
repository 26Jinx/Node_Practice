'use strict'

const net = require('net');
const prt = process.argv[2];

const server = net.createServer(function (socket) {
    // create a timestamp of when the server is created
    let rightNow = new Date();

    // format the date object to spec
    function formatDate(date) {
        let year = date.getFullYear();
        let month = addZero(date.getMonth() + 1);
        let day = addZero(date.getDate());
        let hour = addZero(date.getHours());
        let minute = addZero(date.getMinutes());
        
        // function to add a zero in front for single digit numbers
        function addZero(num) {
            if (num < 10) {
                return '0' + num;
            } else {
                return num;
            }
        }

        let formattedDate = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + '\n';
        
        return formattedDate;
    }

    // close connection and write connection time to socket
    socket.end(formatDate(rightNow))
})

server.listen(prt)

