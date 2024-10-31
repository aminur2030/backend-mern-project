import React, { useState } from 'react';
import axios from "axios";
import toast from 'react-hot-toast';

const Register = () => {
const[name,setName]=useState("");
const[email,setEmail]=useState("");
const[phone,setPhone]=useState("");
const[password,setPassword]=useState("");

const handleRegister=async(e)=>{
  e.preventDefault();
  try {
    const{data}=await axios.post("http://localhost:4000/api/v1/user/register",
      {name,email,phone, password},
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
      <form onSubmit={handleRegister}>
        <h3>REGISTER</h3>
        <div>
          <label>Your Name</label>
          <input type="text"
           placeholder="Enter your name"
           value={name}
           onChange={(e)=>setName(e.target.value)}
           required />
        </div>
        <div>
          <label>Your Email</label>
          <input type="email"
           placeholder="Enter your email"
           value={email}
           onChange={(e)=>setEmail(e.target.value)}
           required />
        </div>
        <div>
          <label>Your Phone</label>
          <input type="number"
           placeholder="Enter your phone"
           value={phone}
           onChange={(e)=>setPhone(e.target.value)}
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
        <button type="submit">REGISTER</button>       
      </form>
      </section>
    </>
  )
}

export default Register
