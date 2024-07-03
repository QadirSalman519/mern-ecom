import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

const Login = ()=>{
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()

    useEffect(()=>{
        const auth = localStorage.getItem("user")
        if(auth){
            navigate('/')
        }
    })
    
    const submitData = async ()=>{
        let result = await fetch('http://localhost:8000/login',
            {
                method:'POST',
                body:JSON.stringify({email,password}),
                headers: {
                    'Content-type': 'application/json'
                }
            }
        )
        result = await result.json()
        console.log(result)
        if(result.name){
            localStorage.setItem('user',JSON.stringify(result))
            navigate('/')
        }else{
            alert("Enter correct credentials")
        }
    }

    return(
        <div className='login'>
            <h1>Login</h1>
            <input type='text' className="inputBox" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
            <input type='text' className="inputBox" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
            <button type='button' className="buttonSubmit" onClick={submitData}>Login</button>
        </div>
    )
}

export default Login