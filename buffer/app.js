
  //it defaults to utf8
  var buffer = new Buffer('Hello', 'utf8');

  console.log(buffer);
  console.log(buffer.toString());
  console.log(buffer[1]);

  buffer.write('Ha');
  console.log(buffer.toString());
  
