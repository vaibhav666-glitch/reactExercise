import { useState,useContext } from "react";
import userContext  from "../context/usercontext.js";
function Login(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {setUser}=useContext(userContext)
    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({email,password})
    }
    return(
        <>
        <h1>Login</h1>
        <input 
        value={email}
        onChange={(e)=>setEmail(e.target.value)} 
        type="text" placeholder="Enter Email"/>
       
        <input 
         value={password}
         onChange={(e)=>setPassword(e.target.value)} 
        type="password" placeholder="Enter Password"/>
        
        <button onClick={handleSubmit}>Login</button>
        </>
    )
}
export default Login