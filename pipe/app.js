
    var fs = require('fs');
    var zlib = require('zlib');

    var readble = fs.createReadStream(`${__dirname}/greet.txt`);
    var writable = fs.createWriteStream(`${__dirname}/greetCopy.txt`);
    var compressed = fs.createWriteStream(`${__dirname}/greet.txt.gz`);

    var gzip = zlib.createGzip();

    readble.pipe(writable);
    readble.pipe(gzip).pipe(compressed);