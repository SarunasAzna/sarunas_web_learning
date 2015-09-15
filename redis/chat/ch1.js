var redis = require("redis"),
    client1 = redis.createClient(), client2 = redis.createClient(),
    msg_count = 0;

process.stdin.resume();
process.stdin.setEncoding('utf8');





client1.on("subscribe", function (channel, count) {
    
    process.stdin.on('data', function (chunk) {
        client2.publish("a nice channel", chunk);
        
 
});



});

client1.on("message", function (channel, message) {
    console.log("ch1" + ": " + message);
    
});

client1.incr("did a thing");
client1.subscribe("a nice channel");