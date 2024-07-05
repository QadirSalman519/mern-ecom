import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Product = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
    },[])

    const getProducts = async () => {
        let result = await fetch('http://localhost:8000/products');
        result = await result.json()
        setProducts(result)  
    }

    const deleteProduct = async (id) => {
        let result = await fetch(`http://localhost:8000/delete-product/${id}`, {
            method: 'DELETE'
        });
        result = await result.json();
        if (result) {
            getProducts();
        }
    };
    
    return (
        <div className='product-list'>
            <h1>Product</h1>
            <ul>
                <li>S.No</li>
                <li>Name</li>
                <li>Price</li>
                <li>Catgory</li>
                <li>Company</li>
                <li>Action</li>
            </ul>
            {
                products.map((item, index) => (
                    <ul>
                        <li>{index+1}</li>
                        <li>{item.name}</li>
                        <li>${item.price}</li>
                        <li>{item.category}</li>
                        <li>{item.company}</li>
                        <li>
                            <button type='button' onClick={()=>deleteProduct(item._id)}>Delete</button>
                            <Link to={"/update/"+item._id}>Update</Link>
                        </li>
                    </ul>
                ))
            }
        </div>
    )
}

export default Product