  var redis  = require("redis"),
        client = redis.createClient(), multi;
 
    client.multi([
        ["mget", "multifoo", "multibar", redis.print],
        ["mset", "multifoo",111],
        ["incr", "multifoo"],
        ["incr", "multibar"]
    ]).exec(function (err, replies) {
        console.log(replies);
    });