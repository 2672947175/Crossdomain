// clent2 服务器用来做我们的客服端
let express = require('express');
let app = express()
app.use(express.static(__dirname));
app.listen(4000,()=>{
    console.log('服务器2,4000')
})