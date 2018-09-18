const net = require('net');
const port = 8124;

let QA;
let curQA = 0;
const client = new net.Socket();

client.setEncoding('utf8');

client.connect(port, function() {
    console.log('Connected');
    client.write(`${process.argv[2]}`);
});

client.on('data', function(data) {
    console.log(data);
    if(data==='ACK') {
        fs.readFile("qa.json", (err, data) => {
            if (err) {
                console.log("Error read qa.json");
                client.destroy();
            }
            else {
                QA = JSON.parse(data);
                QA = shuffle(QA);
                sendQA()
            }
        });
    }
    else{
        if(data==='DEC'){
            client.destroy();}
            else{}
    }
});

client.on('close', function() {
    console.log('Connection closed');
});

function sendQA() {
    if (curQA < QA.length) {
        client.write(QA[curQA++].qa);
    } else {
        client.destroy();
    }
}

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let rann = getRandomInt(0, i);
        console.log(rann);
        t = arr[rann];
        arr[rann] = arr[i];
        arr[i] = t;
    }
    return arr;
}
