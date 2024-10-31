import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
const Navbar = () => {
  const handleLogout=async (e)=>{
    e.preventDefault();
    try {
      const{data}=await axios.get("http://localhost:4000/api/v1/user/logout",
        
      {withCredentials:true}
    );
    toast.success(data.message);
  
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
  return (
    <>
      <nav>
        <Link to={"/"}>HOME</Link>
        <Link onClick={handleLogout} >LOGOUT</Link>
      </nav>
    </>
  )
}

export default Navbar
