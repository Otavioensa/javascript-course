

    var fs = require('fs');

    // it defaults to utf8.
    var greet = fs.readFileSync(`${__dirname}/greet.txt`, 'utf8');
    console.log(greet);

    // it defaults to a buffer
    var greetAsync = fs.readFile(`${__dirname}/greet.txt`, 'utf8', (err, data) => {
       if (err) {
           return console.log('an error happened')
       }
        console.log('from async')
        console.log(data)
    });