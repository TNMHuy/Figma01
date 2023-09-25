import React, { useContext, useState } from 'react'
import { UserContext } from '../utills/loginContext'
import { Navigate } from 'react-router-dom'

const Login = () => {
  const [userName,setUserName] = useState('')
  const [password,setPassword] = useState('')
  const user = useContext(UserContext)
  if(user.isLoggedIn){
    return <Navigate to = '/admin' />
  }
  
  const logIn = () =>{
   if(userName==='admin'&& password==='123123') {
    user.setLogin(true)

   }
   else {
    alert('Sai thong tin')
    setPassword('')
    setUserName('')
   }

  }
  return (
    <div className='bg-opacity'>
      <div className=' box '>
            <span className='borderLine'></span>
            <form className=' text-white px-[40px] py-[50px] inset-[4px]  bg-[#000]  absolute flex flex-col z-[2] '>
              <h2 className='text-center font-medium  text-[60px] tracking-wider'>Sign in</h2>
              <div className=''>
              <div className='mt-8  input-box'>
                <input className=' z-10 font-semibold' type="text" required='required' value={userName} onChange={ event =>{setUserName(event.target.value)}} />
                <span>Username</span>
                <i></i>
                </div>
              <div className='mt-12 input-box'>
                <input className=' z-10 font-semibold' type="password"  required='required' value={password} onChange={ event =>{setPassword(event.target.value)}} />
                <span>Password</span>
                <i></i>
            
                </div>
                <div className='mt-8 flex justify-between'>
                  <button className='hover:text-[#ccc]'>Forgot Password</button>
                  <button className='hover:text-[#ccc]'>Sign Up</button>
                </div>
              </div>

            <input className='mt-10 text-[22px] p-[10px] bg-white text-black w-[120px] font-semibold rounded cursor-pointer hover:bg-[#ccc]' type="submit" value='Login' onClick={logIn} />
          </form>
    </div>
    </div>
  )
}

export default Login