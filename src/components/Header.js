import React from 'react'
import { Logo_url } from '../utils/constant'
import { useState } from 'react'

const Header=()=>{
  const [btnname,setbtnname]=useState('Login');
  
    return (
      <div className="header">
        <div className="logo-comtainer">
          <img className="logo" src={Logo_url}/>
        </div>
      <div className="nav-items">
     <ul>
      <li>Home</li>
      <li>About Us</li>
      <li>Contact Us</li>
      <li>Cart</li>
      <button className='login'
          onClick={()=>{btnname==='Login'?setbtnname('Logout'):setbtnname('Login');

          }}>{btnname}</button>
     </ul>
      </div>
      </div>
    )
  }
  

export default Header