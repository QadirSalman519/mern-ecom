import React from 'react';
import {Link,useNavigate} from 'react-router-dom';

const Nav=()=>{
    const auth = localStorage.getItem('user')
    const navigate = useNavigate()
    const logout = ()=>{
        localStorage.clear()
        navigate('/login')
    }
    return(
        <div> 
            <img src='https://static.vecteezy.com/system/resources/previews/019/766/240/original/amazon-logo-amazon-icon-transparent-free-png.png' alt='logo' className='logo' />
            {
                auth ?
                <ul className='nav-ul'>
                    <li><Link to="/">Products</Link></li>
                    <li><Link to="/add">Add Product</Link></li>
                    <li><Link to="/update">Update Product</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link onClick={logout} to="/login">Logout ({JSON.parse(auth).name}) </Link></li>
                </ul>
                :
                <ul className='nav-ul'>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/signup">Sign Up</Link></li>             
                </ul>
            }

        </div>
    );
}

export default Nav;
