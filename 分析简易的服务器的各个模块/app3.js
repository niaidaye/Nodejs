/**
 * 2017/11/2
 * 作者: 64599
 * 功能:
 */
var http = require ("http");
var server = http.createServer( function (require, response) {


    response.writeHead( 200, {"Content-type" : "text-plain"});
    response.write("ok");
    response.end();
});
server.listen( 3000 );