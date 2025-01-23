import React from 'react'
import { Logo_url } from '../utils/constant'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus'

const Header=()=>{
  const [btnname,setbtnname]=useState('Login');
  const onlineStatus=useOnlineStatus();
    return (
      <div className="flex justify-between bg-pink-100 shadow-lg mb-2 ">
        <div className="logo-comtainer">
          <img className="w-20" src={Logo_url}/>
        </div>
      <div className="flex items-center">
     <ul className='flex p-4 m-4 '>
     <li className='px-5 font-bold text-xl'>
      onlineStatus:{onlineStatus?"🟢":"🔴"}
     </li>
     <li className='px-5 font-bold text-xl'>   <Link to="/"> Home</Link></li>
     <li className='px-5 font-bold text-xl'><Link to="/about">About Us</Link></li>
     <li className='px-5 font-bold text-xl'><Link to="/Contact"> Contact Us</Link></li>
     <li className='px-5 font-bold text-xl'><Link to="/Cart">Cart</Link></li>
     <li className='px-5 font-bold text-xl'><Link to="/grocery">Grocery</Link></li>
      
     
      
      <button className='px-5 font-bold text-xl'
          onClick={()=>{btnname==='Login'?setbtnname('Logout'):setbtnname('Login');

          }}>{btnname}</button>
     </ul>
      </div>
      </div>
    )
  }
  

export default Header