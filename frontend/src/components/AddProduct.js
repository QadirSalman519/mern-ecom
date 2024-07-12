import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const AddProduct = ()=>{
    const [name,setName] = useState("")
    const [category,setCategory] = useState("")
    const [price,setPrice] = useState("")
    const [company,setCompany] = useState("")
    const [error,setError] = useState(false)
    const navigate = useNavigate()
    
    const submitProduct = async ()=>{

        if(!name || !category || !price || !company){
            setError(true)
            return false
        }

        const userId = JSON.parse(localStorage.getItem("user"))._id
        let result = await fetch('http://localhost:8000/add-product',{
            method:'POST',
            body:JSON.stringify({name,price,userId,category,company}),
            headers:{
                'Content-Type':'application/json'
            }
        })
        result = await result.json()
        navigate('/')
        console.log(result)
    }

    return(
        <div className='product'>
            <h1>Add Product</h1>
            <input type='text' className='inputBox' placeholder='Enter Name' value={name} onChange={(e)=>setName(e.target.value)}/> {error && !name && <span className='invalid-input'>Enter Valid Name</span>}
            <input type='text' className='inputBox' placeholder='Enter Price' value={price} onChange={(e)=>setPrice(e.target.value)}/> {error && !price && <span className='invalid-input'>Enter Valid Price</span>}
            <input type='text' className='inputBox' placeholder='Enter Category' value={category} onChange={(e)=>setCategory(e.target.value)}/> {error && !category && <span className='invalid-input'>Enter Valid Category</span>}
            <input type='text' className='inputBox' placeholder='Enter Company' value={company} onChange={(e)=>setCompany(e.target.value)}/> {error && !company && <span className='invalid-input'>Enter Valid Company</span>}
            <button type='button' className='buttonSubmit' onClick={submitProduct}>Add Product</button>
        </div>
    )
}

export default AddProduct