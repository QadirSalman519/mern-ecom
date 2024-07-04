import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const UpdateProduct = ()=>{
    const [name,setName] = useState("")
    const [category,setCategory] = useState("")
    const [price,setPrice] = useState("")
    const [company,setCompany] = useState("")
    const params = useParams()

    useEffect(()=>{
        console.warn(params.id)
        getProductDetails()
    })

    const getProductDetails = async()=>{
        let result = await fetch(`http://localhost:8000/product/${params.id}`)
        result = await result.json()
        setName(result.name)
        setPrice(result.price)
        setCategory(result.category)
        setCompany(result.company)
    }

    const updateProduct = async () => {
        console.log(name,category,price,company)
    };

    return(
        <div className='product'>
            <h1>Update Product</h1>
            <input type='text' className='inputBox' placeholder='Enter Name' value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type='text' className='inputBox' placeholder='Enter Price' value={price} onChange={(e)=>setPrice(e.target.value)}/>
            <input type='text' className='inputBox' placeholder='Enter Category' value={category} onChange={(e)=>setCategory(e.target.value)}/>
            <input type='text' className='inputBox' placeholder='Enter Company' value={company} onChange={(e)=>setCompany(e.target.value)}/>
            <button type='button' className='buttonSubmit' onClick={updateProduct}>Update Product</button>
        </div>
    )
}

export default UpdateProduct