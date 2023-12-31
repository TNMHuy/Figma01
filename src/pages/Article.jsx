import React from 'react'
import {Link} from 'react-router-dom'
import { getFormattedDate } from '../utills/blog'

const Article = ({post}) => {
  return (
    <div className='flex flex-col gap-8 border border-black p-12 h-[1000px] overflow-hidden'>
        <div className='flex justify-between items-center'>
            <p className='text-xs'>{getFormattedDate(post.date)}</p>
            <button className='border border-black rounded-[100px] py-2 px-3 uppercase'>ART</button>
        </div>
        <div>
        {post._embedded['wp:featuredmedia']&& <img className='h-[366px] w-[366px]' src={post._embedded['wp:featuredmedia']['0'].source_url} alt="" />} 
        {!post._embedded['wp:featuredmedia']&& <img className='h-[366px] w-[366px]' src={'https://via.placeholder.com/380x380'} alt="" />}
        </div>
        <Link  to={'/blog/' + post.slug} className='flex flex-col  justify-between gap-4'>
           
                <h2 className='2xl:text-[32px] xl:text-[28px] font-semibold'>{post.title.rendered}</h2>
                 <div className='2xl:text-[16px]  md:text-[14px] sm:text-[12px] ' dangerouslySetInnerHTML={{__html:post.excerpt.rendered}}/>
           
           
        </Link>

    </div>
  )
}

export default Article