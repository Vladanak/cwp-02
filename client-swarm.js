const childProcess = require('child_process').exec;
const COUNT = process.argv[2];
const Word = process.argv[3];

for (let i = 0; i < COUNT; i++) {
    childProcess(`node client.js ${Word}`, (err, sout) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log("   ---***---   " + i + "   ---***---   ");
        console.log(sout);
    });
}