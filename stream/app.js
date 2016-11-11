
    var fs = require('fs');

    // 32 Kb
    var readble = fs.createReadStream(`${__dirname}/greet.txt`, {
        encoding: 'utf8',
        highWaterMark: 32 * 1024
    });

    var writable = fs.createWriteStream(`${__dirname}/greetCopy.txt`)

    // chunks are pieces of data limited by buffer's size
    readble.on('data', (chunk) => {
        console.log(chunk.length);
        writable.write(chunk);
    });