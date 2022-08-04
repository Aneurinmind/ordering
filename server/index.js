//从服务器拿到数据的流程

const express = require("express")
//解析请求
const bodyParser = require("body-parser")
//处理跨域
const cors = require("cors")

const db = require('./db')

// 定义一台服务器
const app = express()

const productRouter = require('./routes/productRouter')

// 允许调用api
var corsOptions = {
    origin:"http://localhost:3000"
}

app.use(cors(corsOptions))
// 数据编码格式
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

//连接数据库
db.on('error',console.error.bind(console,'MongoDB connection error'))

//测试服务器设置正确
app.get("/",(req,res) => {
    res.json({message:"Welcome to Food Ordering"})
})

const PORT = process.env.PORT || 8080
//测试服务器是否正常开启
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})

// 使用得到食物数据
app.use('/api/',productRouter)

