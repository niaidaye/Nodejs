# Nodejs
这是一个关于nodejs的学习之路
## 万年不变的hello word
>console.log("helloword");
 
>console.log("hello nodejs");

## Nodej.JS和 Javascript的关系

## 搭建简易的Http服务器
创建一个简易的HttpServer
  * 为什么Node.JS搭建Server这么简单，因为工具方法强大，本身Node.JS也是一个容器

## 分析简易的服务器的各个模块
Node.JS Http Server 请求和响应的原理
  1. 我们创建一个Server对象（利用createServer 和 回掉函数），当我们的Server获取的到了请求的时候，我们Node.JS就会通过Node.JS中的事件分发机制调用我们的回掉函数，从而我们能够获取到请求的信息