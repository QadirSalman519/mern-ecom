import React from 'react';
import {Link} from 'react-router-dom';

const Nav=()=>{  
    return(
        <div>
            <ul className='nav-ul'>
                <li>
                    <Link to="/">Products</Link>
                    <Link to="/add">Add Product</Link>
                    <Link to="/update">Update Product</Link>
                    <Link to="/logout">Logout</Link>
                    <Link to="/profile">Profile</Link>
                    <Link to="/signup">Sign Up</Link>
                </li>
            </ul>
        </div>
    );
}

export default Nav;
