import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(()=>{
        const auth = localStorage.getItem("user")
        if(auth){
            navigate('/')
        }
    })

    const collectData = async ()=>{
        // console.warn(name,email,password)

        const response = await fetch('http://localhost:5000/register',{
            method:'post',
            body: JSON.stringify({
                name,email,password
            }),
            headers:{
                'Content-Type': "application/json"
            },
        })
        const result = await response.json();
        if(result){
            navigate('/')
        }
        // console.log(result)
        localStorage.setItem("user",JSON.stringify(result))

    }

    return (
        <div className="registerDiv">
            <h1>Register</h1>
            <input type="text" className="inputBox" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} name="name" />
            <input type="email" className="inputBox" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} name="email" />
            <input type="password" className="inputBox" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" />
            <button type="button" className="buttonRegister" onClick={collectData}>Sign Up</button>
        </div>
    );
}

export default Register;