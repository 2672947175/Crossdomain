// clent1 

let express = require('express');
let app = express()
app.use(express.static(__dirname));
app.listen(4001,()=>{
    console.log('服务器1,4001')
})