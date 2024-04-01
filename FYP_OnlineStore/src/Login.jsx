import { useState } from 'react'
import { motion } from 'framer-motion'

import './Login.css'
import './cssFiles/index.css';
import './Compoents/NavBar/NavBar'
import { Link,Outlet } from 'react-router-dom'
import NavBar from './Compoents/NavBar/NavBar'
import Footer from './Compoents/Footer/Footer'


function Login() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <>
    <NavBar/>
    <div className='parent-div'>
    <div className='bordered-div'>
    <h1>Login Page</h1>
    <form onSubmit={()=>console.log("Lets GO!")}>
     UserName: <input type='text' placeholder=''></input>
      <br></br>
     PassWord: <input type={isPasswordVisible?'text':'password'} placeholder=''></input>
     <button type='button' onClick={togglePasswordVisibility}>X</button>
     <br></br>
     <input type='submit'></input>  <a href='#'>NewUser?</a>
    </form>
   
   </div>
   <div className='bordered-div'>
    <h1>Login Page</h1>
    <form>
     UserName: <input type='text' className='box' placeholder=''></input>
      <br></br>
     PassWord: <input type={isPasswordVisible?'text':'password'} placeholder=''></input>
     <button className='shiny-button' type='button' onClick={togglePasswordVisibility}>X</button>
     <br></br>
     <input type='submit'></input>  <a href='#'>NewUser?</a>
    </form>
   
   </div>
   </div>
   <Footer/>
    </>
  )
}

export default Login
