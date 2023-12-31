import React from 'react'
import { Link } from 'react-router-dom'
import { getFormattedDate } from '../../../utills/blog'


const SubHomeBody = ({post,index}) => {
  // console.log(post._embedded); 
  
  return (
    <div className={index===5?'mb-12 pb-12': 'border-b border-black mb-12 pb-12'}>
      <div className='grid grid-cols-4 gap-12 '>
        <div className='col-span-1'>
           {post._embedded['wp:featuredmedia']&& <img className='w-[380px] aspect-square' src={post._embedded['wp:featuredmedia']['0'].source_url} alt="" />} 
           {!post._embedded['wp:featuredmedia']&& <img className='w-[380px] aspect-square' src={'https://via.placeholder.com/380x380'} alt="" />} 
        </div>
        <Link  to={'/blog/' + post.slug} className='flex flex-col justify-between col-span-3'>
            <div className='2xl:text-[32px] xl:text-[28px] lg:text-[24px] font-semibold leading-[120%] font-[General Sans]'>{post.title.rendered}</div>
            {/* <div className='2xl:text-[18px] xl:text-[16px] lg:text-[10px] md:text-[px] font-normal leading-[180%] 2xl:mt-[-50px] xl:mt-[12px] lg:mt-[10px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.</div> */}
            <div className=' 2xl:text-[18px] xl:text-[16px] lg:text-[10px] md:text-[px] font-normal leading-[180%] 2xl:mt-[-50px] xl:mt-[12px] lg:mt-[10px] line-clamp-3 ' dangerouslySetInnerHTML={{__html:post.excerpt.rendered}}/>

            <div className='flex justify-between items-center'>
            <p className='text-[16px]'>{getFormattedDate(post.date)}</p>
            <button className='border md:text-[8px] 2xl:text-[18px] border-black rounded-[100px] py-2 px-3 uppercase'>ART</button>
        </div>       
        </Link>
    </div>
     
    </div>
    
  )
}

export default SubHomeBody