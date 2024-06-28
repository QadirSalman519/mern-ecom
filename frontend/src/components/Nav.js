import React from 'react';
import {Link,useNavigate} from 'react-router-dom';

const Nav= ()=>{
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = ()=>{
        localStorage.clear()
        navigate('/register')
    }
    return(
        <div className="App">
            <ul className='nav-ul'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li>
                    {auth ? <Link to="/logout" onClick={logout}>Logout</Link> : <Link to="/register">Register</Link>} 
                </li>
                
            </ul>
        </div>
    )
}

export default Nav;