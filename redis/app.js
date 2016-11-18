
  const redis = require('redis');
  const redisClient = redis.createClient({
    host: 'localhost',
    port: '6379'
  });

  redisClient.on('ready', () => {
    console.log('Redis is ready');
  });

  redisClient.on('error', () => {
    console.log('An error has occured');
  });

  // it sets a value for a given key
  redisClient.set('framework', 'hapijs', (err, reply) => {
    console.log(err);
    console.log(reply);
  });

  // it stores an object/hash
  redisClient.hmset('tools', 'webserver', 'expressjs', 'database', 'mongoDB',
    'devops', 'jenkins',(err, reply) => {
      console.log(err);
      console.log(reply);
  });

  // it gets an object/hash
  redisClient.hgetall('tools',function(err,reply) {
   console.log(err);
   console.log(reply);
  });

  // it pushes a list
  redisClient.rpush(['names', 'john', 'karl', 'july'], (err, reply) => {
    console.log(err);
    console.log(reply);
  });

  // it pushes a list, but it doesn't duplicate the values
  redisClient.sadd(['fruits', 'apple', 'apple', 'orange'], (err, reply) => {
    console.log(err);
    console.log(reply);
  });

  // it checks a given key into it's existence
  redisClient.exists('fruits', (err, reply) => {
    if (!err) {
      if (reply === 1) {
        console.log('key exists');
      } else {
        console.log('key does not exist');
      }
    }
  });

  // it deletes a given key
  redisClient.del('fruits', (err, reply) => {
    if (!err) {
      if (reply === 1) {
        console.log('Key is deleted');
      } else {
        console.log('Key does not exist');
      }
    }
  });

  //it expires a given key(seconds)
  redisClient.expire('framework', 5);
