import React, { useRef } from 'react'
import { Navigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { login, register } from '../../redux/slice/authSlice'
import emailjs from '@emailjs/browser'

const Register = () => {
  const dispatch = useDispatch()
  // const form = useRef()
  
  const formik = useFormik({
    initialValues:{
      username:'',
      email:'',
      password:'',
      isAdmin:true
    },
    validationSchema: Yup.object({
      username: Yup.string().required(),
      password: Yup.string().required().min(4),
    }),
    onSubmit:(data)=>{
      dispatch(register(data))
      // emailjs.sendForm('service_8bupfxs','template_lawi0cj', form.current,'RYOE6H0OS9tjZTHhr')
      
      
    }
  })
  // const handleRegister =(e)=>{
  //   e.preventDefault()
    
  // }
  
  return (
    <div className='bg-opacity'>
      <div className=' box '>
            <span className='borderLine'></span>
            <form  onSubmit={formik.handleSubmit} className=' text-white px-[40px] py-[50px] inset-[4px]  bg-[#000]  absolute flex flex-col z-[2] '>
              <h2 className='text-center font-medium  text-[60px] tracking-wider'>Register</h2>
              <div className=''>
              <div className='mt-8  input-box'>
                <input className=' z-10 font-semibold w-full' type="username" name='username' required='required' value={formik.values.username} onChange={formik.handleChange} />
                <span>Username</span>
                <i></i>
                </div>
              <div className='mt-12 input-box'>
                <input className=' z-10 font-semibold' type="password" name='password' required='required' value={formik.values.password} onChange={formik.handleChange} />
                <span>Password</span>
                <i></i>
            
                </div>
              <div className='mt-12 input-box'>
                <input className=' z-10 font-semibold w-full' type="email" name='email' required='required' value={formik.values.email} onChange={formik.handleChange} />
                <span>Email</span>
                <i></i>
            
                </div>
                {/* <div className='mt-8 flex justify-between'>
                  <button className='hover:text-[#ccc]'>Forgot Password</button>
                  <button className='hover:text-[#ccc]'>Sign Up</button>
                </div> */}
              </div>

            <button className='mt-10 text-[22px] p-[10px] bg-white text-black w-[120px] font-semibold rounded cursor-pointer hover:bg-[#ccc]' type="submit" >Register</button>
          </form>
    </div>
    </div>
  )
  

}

export default Register