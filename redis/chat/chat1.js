var redis  = require("redis"),
    client = redis.createClient(), multi;

client.multi([
    ["mget", "message", redis.print],
    ["mset", "message","hello"]
]).exec(function (err, replies) {
    //console.log(replies);
});