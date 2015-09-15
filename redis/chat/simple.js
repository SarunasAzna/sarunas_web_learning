var redis  = require("redis"),
    client = redis.createClient(), multi;

// start a separate multi command queue 
multi = client.multi();
multi.incr("incr thing", redis.print);
multi.incr("incr other thing", redis.print);

// runs immediately 
client.mset("incr thing", 100, "incr other thing", 1, redis.print);


multi.exec(function (err, replies) {
    console.log(replies); 
});

function waitAndDo(times) {
  if(times < 1) {
    return;
  }

  setTimeout(function() {


    // this shit does not work
    multi.exec(function (err, replies) {
        console.log(replies); // 101, 2 
    });
    console.log('smth')

    

    waitAndDo(times-1);
  }, 1000);
}  

waitAndDo(10)

// you can re-run the same transaction if you like 
multi.exec(function (err, replies) {
    console.log(replies); // 102, 3 
    client.quit();
});

