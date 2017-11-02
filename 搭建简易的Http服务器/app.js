/**
 * 2017/11/2
 * 作者: 64599
 * 功能: 搭建简易的HttpServer
 */

var httpServer = require('http');//导入HTTP模块
var server = httpServer.createServer(function (request, response) {
    console.log( "Get An Client Request");
    response.writeHead(200,{"Content-Type" : "text/plain"});
    response.write("Hello Buddy ");
    response.end("ok");

    console.log("Request Response OK");

});

server.listen(3000);
console.log("Server Started...");




//例子

// var httpServer = require( 'http' ) // 导入Node.JS库中的Http的库文件，并获取句柄
//
// var server = httpServer.createServer(function ( request, response ) {
//
//     console.log( "Get An Client Request")
//     response.writeHead( 200, { "Content-Type" : "text/plain"} );
//     response.write( "Hello Buddy ")
//     response.end( )
//
//     console.log( "Request  Response OK")
// })
//
//
// server.listen( 3000 )