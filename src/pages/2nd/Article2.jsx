import React from 'react'
import {Link, useParams} from 'react-router-dom'
import { getFormattedDate } from '../../utills/blog'
import axios from 'axios';
import { useSelector } from 'react-redux';

const Article2 = ({post}) => {
  
  const token = useSelector((state)=>state.auth.user.accessToken)

  const handleDelete = (id) => {
    
    axios
      .delete('https://advanced-blog.glitch.me/v1/post/' + id, {
        headers: {
          
          token: `Bearer ${token}`
        }
      })
      .then((res) => {
       window.location.reload()
      })
      .catch((err) => {
        console.log('Something wrong here');
      });
  
  };
  
  return (
    <div className='flex flex-col gap-8 border border-black p-12 h-[1000px] overflow-hidden'>
        <div className='flex justify-between items-center'>
            <p className='text-xs'>{getFormattedDate(post.createdAt)}</p>
            <Link to={'/edit2/'+ post._id} className='border border-black rounded-[100px] py-2 px-3 uppercase'>EDIT</Link>
            <button className='border border-black rounded-[100px] py-2 px-3 uppercase' onClick={()=>{handleDelete(post._id)}}>DELETE</button>
        </div>
        <div>
        {post.cover&& <img className='h-[366px] w-[366px]' src={post.cover} alt="" />} 
        {!post.cover&& <img className='h-[366px] w-[366px]' src={'https://via.placeholder.com/380x380'} alt="" />}
        </div>
        <Link  to={'/blog2/' + post._id} className='flex flex-col  justify-between gap-4'>
           
                <h2 className='2xl:text-[32px] xl:text-[28px] font-semibold'>{post.title}</h2>
                 <div className='2xl:text-[16px]  md:text-[14px] sm:text-[12px] '/>{post.content}
           
           
        </Link>

    </div>
  )
}

export default Article2