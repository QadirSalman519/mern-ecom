const express = require('express')
const cors = require('cors')
require('./db/config')
const User = require('./db/User')
const Product = require('./db/Product')
const app = express();
app.use(express.json())
app.use(cors())

app.get('/',(req,rsp)=>{
    rsp.send("Welcome")
})

app.post('/register',async (req,resp)=>{
    let user = new User(req.body)
    let result = await user.save()
    result = result.toObject()
    delete result.password
    resp.send(result)
})

app.post('/login',async (req,resp)=>{
    if(req.body.email && req.body.email){
        let user = await User.findOne(req.body).select('-password')
        if(user){
            resp.send(user)
        }else{
            resp.send({result:'No Record Found'})
        }
    }else{
        resp.send({result:'Email and Password fields are required'}) 
    }
})

app.post('/add-product', async (req,resp)=>{
    let product = new Product(req.body)
    let result = await product.save()
    resp.send(result)
})

app.get('/products', async (req,resp)=>{
    let products = await Product.find()
    if(products.length>0){
        resp.send(products)
    }else{
        resp.send({
            result:'No Products Available'
        })
    }
})

app.delete('/delete-product/:id',async (req,resp)=>{
    let result = await Product.deleteOne({_id:req.params.id})
    resp.send(result)
})

app.get('/product/:id',async (req,resp)=>{
    let result = await Product.findOne({_id:req.params.id})
    if(result){
        resp.send(result)
    }else{
        resp.send({result:'Product Not Available'})
    }
})

app.put('/update-product/:id',async (req,resp)=>{
    let result = await Product.updateOne({_id:req.params.id},
        {
            $set:req.body
        }
    )
    resp.send(result)
})

app.get('/search/:keyword', async (req, resp) => {

    const keyword = req.params.keyword;
    let result = await Product.find({
        "$or":[
            {name:{$regex:keyword}},
            {company:{$regex:keyword}},
            {price:{$regex:keyword}},
            {category:{$regex:keyword}},
        ]
    })
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