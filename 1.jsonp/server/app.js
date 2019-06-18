// clent1 

let express = require('express');
let app = express()

app.get('/cors',function(req,res){
    let {cb,wd} = req.query;

    // 后端需要取到前段传递过来的回调函数名称和参数
    res.send(`${cb}({data:'你好'})`)
})


app.listen(3000,()=>{
    console.log('服务器1,3000')
})