import React, { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom'
import { getFormattedDate, getPostApi, getPostApiId } from '../utills/blog'

const Edit = () => {
    const {id} = useParams()
    const [post,setPost] = useState([])
  
    useEffect( () =>{
        const getData = getPostApiId.get(`/${id}?_embed`).then(
          (data)=>{
            setPost(data.data)
          }
        )
      },[])
      console.log(post);
  return (
    <div>Edit</div>
  )
}

export default Edit