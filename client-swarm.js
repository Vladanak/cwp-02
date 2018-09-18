const childProcess = require('child_process').exec;
const fs = require("fs");
const COUNT = process.argv[2];

for (let i = 0; i < COUNT; i++) {
    childProcess('node client.js', (err, sout, serr) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log("   ---***---   " + i + "   ---***---   ");
        console.log(sout);
    });
}