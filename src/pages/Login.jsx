import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { login } from '../redux/slice/authSlice'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'

const Login = () => {
  const dispatch = useDispatch()
  
  const token = useSelector((state)=>state.auth.user.accessToken)// {return state.auth.user.token}
  const user = useSelector((state)=>state.auth.user)// {return state.auth.user.token}
  console.log(token);
  // console.log(user);
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues:{
      username:'',
      password:''
    },
    validationSchema: Yup.object({
      username: Yup.string().required(),
      password: Yup.string().required().min(4),
    }),
    onSubmit:(data)=>{
      // console.log(data);
      dispatch(login(data))
      console.log('123');
    }
  })

  if(token){
    return <Navigate to ='/admin'/>
  }
 
  return (
    <div className='bg-opacity'>
      <div className=' box '>
            <span className='borderLine'></span>
            <form onSubmit={formik.handleSubmit} className=' text-white px-[40px] py-[50px] inset-[4px]  bg-[#000]  absolute flex flex-col z-[2] '>
              <h2 className='text-center font-medium  text-[60px] tracking-wider'>Sign in</h2>
              <div className=''>
              <div className='mt-8  input-box'>
                <input className=' z-10 font-semibold w-full' type="text" name='username' required='required' value={formik.values.username} onChange={formik.handleChange} />
                <span>Username</span>
                <i></i>
                </div>
              <div className='mt-12 input-box'>
                <input className=' z-10 font-semibold' type="password" name='password' required='required' value={formik.values.password} onChange={formik.handleChange} />
                <span>Password</span>
                <i></i>
            
                </div>
                <div className='mt-8 flex justify-between'>
                  <button className='hover:text-[#ccc]'>Forgot Password</button>
                  <button className='hover:text-[#ccc]'>Sign Up</button>
                </div>
              </div>

            <button className='mt-10 text-[22px] p-[10px] bg-white text-black w-[120px] font-semibold rounded cursor-pointer hover:bg-[#ccc]' type="submit" >Login</button>
          </form>
    </div>
    </div>
  )
  // const dispatch = useDispatch()
  // const token = useSelector((state)=>state.auth.user.token)// {return state.auth.user.token}
  // const user = useSelector((state)=>state.auth.user)// {return state.auth.user.token}
  // console.log(token);
  // console.log(user);
  // const formik = useFormik({
  //   initialValues:{
  //     email:'',
  //     password:''
  //   },
  //   validationSchema: Yup.object({
  //     email: Yup.string().required().email(),
  //     password: Yup.string().required().min(4),
  //   }),
  //   onSubmit:(data)=>{
  //     // console.log(data);
  //     dispatch(login(data))
  //   }
  // })

  // if(token){
  //   return <Navigate to='/admin'/>
  // }
 
  // return (
  //   <div className='bg-opacity'>
  //     <div className=' box '>
  //           <span className='borderLine'></span>
  //           <form onSubmit={formik.handleSubmit} className=' text-white px-[40px] py-[50px] inset-[4px]  bg-[#000]  absolute flex flex-col z-[2] '>
  //             <h2 className='text-center font-medium  text-[60px] tracking-wider'>Sign in</h2>
  //             <div className=''>
  //             <div className='mt-8  input-box'>
  //               <input className=' z-10 font-semibold w-full' type="email" name='email' required='required' value={formik.values.email} onChange={formik.handleChange} />
  //               <span>Username</span>
  //               <i></i>
  //               </div>
  //             <div className='mt-12 input-box'>
  //               <input className=' z-10 font-semibold' type="password" name='password' required='required' value={formik.values.password} onChange={formik.handleChange} />
  //               <span>Password</span>
  //               <i></i>
            
  //               </div>
  //               <div className='mt-8 flex justify-between'>
  //                 <button className='hover:text-[#ccc]'>Forgot Password</button>
  //                 <button className='hover:text-[#ccc]'>Sign Up</button>
  //               </div>
  //             </div>

  //           <button className='mt-10 text-[22px] p-[10px] bg-white text-black w-[120px] font-semibold rounded cursor-pointer hover:bg-[#ccc]' type="submit" >Login</button>
  //         </form>
  //   </div>
  //   </div>
  // )
  
//   const dispatch = useDispatch();
//     const auth = useSelector(state => state.auth);
//     const navigate = useNavigate()
//     // if (auth.user.token){
//     //     // navigate('/admin')
//     //     console.log(auth.user.token);
//     // }
//     const formik = useFormik({
//         // Initial values
//         initialValues: {
//             email: '',
//             password: ''
//         },

//         // Validation Schema
//         validationSchema: Yup.object({
//             email: Yup.string().required().email(),
//             password: Yup.string().required().min(4),
//         }),

//         // On Submit
//         onSubmit: (data) => {
//           // console.log(data);
//             dispatch(login(data));
//         }
//     });

//     return (
//         <>
//             <section className="h-screen">
//                 <div className="container px-6 py-12 h-full">
//                     <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
//                         <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
//                             <img
//                                 src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
//                                 className="w-full"
//                                 alt=""
//                             />
//                         </div>
//                         <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
//                             <h1 className='font-bold text-6xl text-center mb-5'>Login</h1>
//                             <form >
//                                 <div className="mb-6">
//                                     <input
//                                         type="email"
//                                         className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
//                                         placeholder="Email address"
//                                         name="email"
//                                         value={formik.values.email}
//                                         onChange={formik.handleChange}
//                                     />
//                                 </div>

//                                 <div className="mb-6">
//                                     <input
//                                         type="password"
//                                         className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
//                                         placeholder="Password"
//                                         name="password"
//                                         value={formik.values.password}
//                                         onChange={formik.handleChange}
//                                     />
//                                 </div>

//                                 <button
//                                     type="button"
//                                     onClick={formik.handleSubmit}
//                                     className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full disabled:bg-blue-500 disabled:text-slate-100 disabled:cursor-wait"
//                                     data-mdb-ripple="true"
//                                     data-mdb-ripple-color="light"
//                                     disabled={auth.isLoading}
//                                 >
//                                     Login
//                                 </button>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     )
}

export default Login