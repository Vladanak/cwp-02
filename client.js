const net = require('net');
const port = 8124;

const client = new net.Socket();

client.setEncoding('utf8');

client.connect(port, function() {
    console.log('Connected');
    if(process.argv[2] === undefined) {
        client.write('dec');
    }
    else {
        client.write(process.argv[2]);
    }
});

client.on('data', function(data) {
    console.log(data);
});

client.on('close', function() {
    console.log('Connection closed');
});