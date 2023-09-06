import React from 'react'
import {Link} from 'react-router-dom'
const Article = ({post}) => {
  return (
    <div className='flex flex-col gap-8 border border-black p-12 h-[864px] '>
        <div className='flex justify-between items-center'>
            <p className='text-xs'>{post.date}</p>
            <button className='border border-black rounded-[100px] py-2 px-3 uppercase'>ART</button>
        </div>
        <div>
            <img src="https://via.placeholder.com/380x380" alt="" />
        </div>
        <Link  to={'/blog/' + post.slug} className='flex flex-col justify-between gap-4'>
           
                <h2 className='text-[32px] font-semibold'>{post.title.rendered}</h2>
                 <div dangerouslySetInnerHTML={{__html:post.excerpt.rendered}}/>
           
           
        </Link>

    </div>
  )
}

export default Article