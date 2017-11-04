/**
 * 2017/11/3
 * 作者: 64599
 * 功能:
 */
var http = require('http');

var url = require('url');

var qs = require('querystring'); //解析参数的库

http.createServer(onRequest).listen(3000);

/**
 * 2017/11/3
 * 作者: 64599
 * 功能: 客户端的请求函数
 */
function onRequest(req, resp) {
    // 第一种利用querystring模块的方式获取参数的方法
    var arg = url.parse(req.url).query;

    var nameValue = qs.parse(arg)['name'];

    console.log('name:',nameValue);


    //第二利用url模块的方式获取参数的方法
    var arg2 = url.parse(req.url, true).query;

    console.log("age:",arg2.age);

    console.log('==========');
    resp.writeHead(200);
    resp.write('helloword');
    resp.end()
}





