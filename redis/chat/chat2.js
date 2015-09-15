var redis  = require("redis"),
    client = redis.createClient(), multi;

var msg = 

client.multi([
    ["mget", "message", redis.print],
    ["mset", "message","world"]
   
]).exec(function (err, replies) {
    //console.log(replies);
});