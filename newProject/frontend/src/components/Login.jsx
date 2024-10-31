import React, { useState } from 'react';
import axios from "axios";
import toast from "react-hot-toast";


const Login = () => {
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const handleLogin=async(e)=>{
    e.preventDefault();
    try {
      const{data}=await axios.post("http://localhost:4000/api/v1/user/login",
        {email, password},
      {withCredentials:true,
        headers:{"Content-Type":"application/json"},
    }
    );
    toast.success(data.message);
  
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
  return (
    <>
      <section className='auth'>
      <form onSubmit={handleLogin}>
        <h3>LOGIN</h3>
        
        <div>
          <label>Your Email</label>
          <input type="email"
           placeholder="Enter your email"
           value={email}
           onChange={(e)=>setEmail(e.target.value)}
           required />
        </div>
        
        <div>
          <label>Your password</label>
          <input type="password"
           placeholder="Enter your password"
           value={password}
           onChange={(e)=>setPassword(e.target.value)}
           required />
        </div> 
        <button type="submit">Login</button>       
      </form>
      </section>
    </>
  )
}

export default Login
