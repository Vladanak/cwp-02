const net = require('net');
const port = 8124;

const server = net.createServer((client,id) => {
    id = Math.random();
    console.log('Client connected');
    client.setEncoding('utf8');

    client.on('data', (data) => {
        if(data==='QA') {
            client.write('ACK!');
            client.write(`Your ID is:${id}`);
        }
        else
        {
            client.write('DEC');
            client.destroy();
        }
    });

    client.on('end', () => console.log(`Client disconnected with id ${id}`));
});

server.listen(port, () => {
    console.log(`Server listening on localhost:${port}`);
});