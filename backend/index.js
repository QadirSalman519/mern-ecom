const express = require('express')
const cors = require('cors')
require('./db/config')
const User = require('./db/User')
const app = express();
app.use(express.json())
app.use(cors())
app.get('/',(req,rsp)=>{
    rsp.send("Welcome")
})
app.post('/register',async (req,resp)=>{
    let user = new User(req.body)
    let result = await user.save()
    resp.send(result)
})
app.listen(8000)

// Only For Testing
// const dbConnect=async ()=>{
//     mongoose.connect('mongodb://localhost:27017/e_comm')
//     const productSchema = new mongoose.Schema({})
//     const product = mongoose.model('product',productSchema)
//     const data = await product.find();
//     console.log(data)
// }
// dbConnect()
// Only For Testing