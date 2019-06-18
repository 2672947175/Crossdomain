// clent1 

let express = require('express');
let app = express()
// 设置白名单
let whitelist = ['http://localhost:4001']

app.use(function(req,res,next){
    // 拿到访问的域名
    let origin = req.headers.origin
    // console.log(origin)
    if(whitelist.includes(origin)){
        // console.log(origin)
        // 所有的请求都会走中间件 这里的req 和 res 和下面的req，res是一个
        // 允许那个域访问
        // 携带cookie 跨域 域名不能使用通配符 *
        // res.header('Access-Control-Allow-Origin','*')
        // 携带cookie 跨域 
        res.header('Access-Control-Allow-Origin',origin)
        // 设置允许那个法跨域
        res.header('Access-Control-Allow-Methods','PUT,GET,POST,DELETE')
        // 允许携带那个请求头跨域
        res.header('Access-Control-Allow-Headers','name')
        // 允许携带cookie 跨域 Credentials
        res.header('Access-Control-Allow-Credentials',true)
        // 设置预检请求存活时间 如果发送了一次预检请求一段时间内就不会再次发送预检请求 时间单位是s
        res.header('Access-Control-Max-Age',6)
        // 设置响应头
        res.header('Access-Control-Expose-Headers','name')
        
          // 对于预见请求 直接返回成功
        if(req.method=='OPTIONS') res.end()
        next()
    }
})
app.get('/cors',function(req,res){
    // 后端需要取到前段传递过来的回调函数名称和参数
    res.send('哈哈哈')
})


app.listen(3001,()=>{
    console.log('服务器1,3001')
})