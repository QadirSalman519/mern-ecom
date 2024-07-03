import React,{useState,useEffect} from "react";
import {useNavigate} from 'react-router-dom'

const Register=()=>{
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()

    useEffect(()=>{
        const auth = localStorage.getItem("user")
        if(auth){
            navigate('/')
        }
    })

    const collectData = async ()=>{
        let result = await fetch('http://localhost:8000/register',{
            method:'post',
            body:JSON.stringify({name,email,password}),
            headers: {
                'Content-Type':'application/json'
            }
        })
        result = await result.json()
        localStorage.setItem('user',JSON.stringify(result))
        if(result){
            navigate('/')
        }
    }
    return(
        <div className="register">
            <h1>Sign Up</h1>
            <input type="text" className="inputBox" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)}></input>
            <input type="email" className="inputBox" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
            <input type="password" className="inputBox" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
            <button type="button" className="buttonSubmit" onClick={collectData}>Submit</button>
        </div>
    )
}

export default Register;