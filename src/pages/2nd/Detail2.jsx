import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


import axios from 'axios'

const Detail2 = () => {
    const {id} = useParams()
    const [post,setPost] = useState(null)
    const [list,setList] = useState([])
   
    const navigate = useNavigate();
    useEffect( () => {
        const response =  axios.get(`https://advanced-blog.glitch.me/v1/post/`+id).then(
          (data)=>{
            setPost(data.data)           
          }
        )
        
        
    }, [])

  if(post===null) return 'loading'
  return (
    <div className='mx-20'>
     <h1>{post.title}</h1>
       <img src={post.cover} alt="" />
    </div>
  )
}

export default Detail2