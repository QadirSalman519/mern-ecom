import React,{useState} from "react";

const Register=()=>{
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const collectData = ()=>{
        console.warn(name,email,password)
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