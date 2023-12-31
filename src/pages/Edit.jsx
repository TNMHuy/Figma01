import React, { useEffect, useState } from 'react'
import {  Navigate, useNavigate, useParams } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { getFormattedDate, getPostApi, getPostApiId } from '../utills/blog'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Edit = () => {
    const {id} = useParams()
    const [post,setPost] = useState([])
    const token = useSelector((state)=>state.auth.user.token)
    const [title,setTitle] = useState('')
    const [content,setContent] = useState('')
    const [excerpt,setExcerpt] = useState('')
    const navigate = useNavigate()
    useEffect( () =>{
      const getData = getPostApiId.get(`/${id}?_embed`).then(
        (data)=>{
          setPost(data.data)
          setTitle(data.data.title.rendered)
          setContent(data.data.content.rendered)
          setExcerpt(data.data.excerpt.rendered)
        }
        )
      },[])
    const handleEdit= async(e) =>{
      // e.preventDefault()
      // const formData = new FormData();
      const formData = {
        title: title ,
        content: content,
        excerpt: excerpt
      }
      const headers = { Authorization: `Bearer ${token}`};
      // formData.append('title', title)
      // formData.append('content', content);
      const response = await axios.post(`https://api.hoangquanit.com/wp-json/wp/v2/posts/`+id,
      formData, {headers: headers,'Content-Type': 'application/json'} )
      console.log(response);
      if (response.status===200){
        navigate('/admin')
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
                <ReactQuill theme="snow" value={content} onChange={setContent} />
                {/* <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 h-[300px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="content"
                    placeholder="Enter post content"
                    value={content}
                    onChange={(e)=>{setContent(e.target.value)}}
                    
                ></textarea> */}
            </div>
            <div className="mb-5">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="post-content">
                    Post Excerpt
                </label>
                <ReactQuill theme="snow" value={excerpt} onChange={setExcerpt} />
                {/* <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 h-[300px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="content"
                    placeholder="Enter post content"
                    value={content}
                    onChange={(e)=>{setContent(e.target.value)}}
                    
                ></textarea> */}
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

export default Edit