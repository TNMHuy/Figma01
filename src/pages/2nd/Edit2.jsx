import React, { useEffect, useState } from 'react'
import {  Navigate, useNavigate, useParams } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useSelector } from 'react-redux';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Edit2 = () => {
    const {id} = useParams()
    const [post,setPost] = useState([])
    const [title,setTitle] = useState('')
    const [content,setContent] = useState([])
    const [cover,setCover] = useState('')
    const navigate = useNavigate()
    const token = useSelector((state)=>state.auth.user.accessToken)
    useEffect( () =>{
      const getData = axios.get(`https://advanced-blog.glitch.me/v1/post/`+id).then(
        (data)=>{
          setPost(data.data)
          setTitle(data.data.title)
          setContent(data.data.content)
          setCover(data.data.cover)
        }
        )
      },[])
    const handleEdit= async(e) =>{
      // e.preventDefault()
    
      const formData = {
        title: title ,
        content: content,
        cover: cover
      }
      const headers = { token: `Bearer ${token}`};
      // formData.append('title', title)
      // formData.append('content', content);
      const response = await axios.put(`https://advanced-blog.glitch.me/v1/post/`+id,
      formData, {headers: headers} )
      console.log(response);
      if (response.status===200){
        navigate('/blog2')
      }
    }
    console.log(content);
  // if(post===null) return 'loading'
  return (
    
    <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold mb-5">Edit Post</h1>
        <div >
            <div className="mb-5">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="post-title">
                    Post Title 
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="post-title"
                    type="text"
                    placeholder="Enter post title"
                    name="title"
                    value={title}
                    onChange={(e)=>{setTitle(e.target.value)}}
                    
                />
            </div>
            <div className="mb-5">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="post-content">
                    Post Content
                </label>
                {
                  content?.map((item,index)=>{
                    return (
                      <ReactQuill  value={item} key={index}/>
                      
                    )
                  })
                }
                {/* <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 h-[300px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="content"
                    placeholder="Enter post content"
                    value={content}
                    onChange={(e)=>{setContent(e.target.value)}}
                    
                ></textarea> */}
            </div>
            <div className="mb-5">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="post-title">
                            Featured Image
                        </label>
                        <input
                            className="shadow appearance-none  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="post-title"
                            type="text"
                            value={cover}
                            onChange={e=>setCover(e.target.value)}
                            name="cover"    
                            
                        />
                        <img src={cover} alt="" />
            </div>
          
            <button type='button' 
                   className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"                   
                   onClick={handleEdit} >
                    Edit Post
            </button>
                  
        </div>
    </div>

  )
  
}

export default Edit2