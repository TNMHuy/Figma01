import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getFormattedDate, getPostApi } from '../utills/blog'
import Line from './Line'
import Article from './Article'
import Header from './Header'

const Detail = () => {
    const {slug} = useParams()
    const [post,setPost] = useState({})
    const [list,setList] = useState([])
    const [perPage,setPerPage] = useState('3')
    const [search,setSearch] = useState('')
    const [categories,setcategories] = useState('1,28')
    useEffect( () => {
        const data = getPostApi.get(`?slug=${slug}`).then(
          (res)=>{
            setPost(res.data[0])
          }
        )
        const getData = getPostApi.get(`?per_page=${perPage}&search=${search}&categories=${categories}`).then(
          (data)=>{
            setList(data.data)
          }
        )
    }, [])
  
  return (
    <div className='mx-20'>
      
       <div className='flex items-start gap-[103px] my-24'>
          <h2 className='text-[104px] font-semibold flex-[1_0_0] leading-[110%] uppercase '>{post.title?.rendered}</h2>
          <div className='flex-[1_0_0] text-[20px] leading-[180%] font-medium' dangerouslySetInnerHTML={{__html:post.excerpt?.rendered}}/>
       </div>
       <div className='flex justify-between items-center'>
            <p className='text-xs'>{post.date}</p>
            <button className='border border-black rounded-[100px] py-2 px-3 uppercase'>LABEL</button>
        </div>
        <div className='w-full aspect-video overflow-hidden flex justify-center items-center mt-8 mb-20'> 
            <img src="https://via.placeholder.com/380x380"
                 alt="" 
                 height={409}
                 width={614}
                 className='w-full '
                 />
        </div>
        <div className='w-[1000px] mx-auto flex gap-16 items-start mb-48'>
          <aside>
            <div className='relative flex gap-4 items-center pb-8 border-b border-black '>
              <div>
              <img src="https://via.placeholder.com/380x380"
                 alt="" 
                 height={80}
                 width={80}
                 className='rounded-full '
                 />
              </div>
              <div>
                <h3 className='text-[32px] leading-[120%] font-semibold w-[229px]'>Jakob Gronberg</h3>
              </div>
            </div>
            <div className='mt-8'>
                <div className='flex justify-between items-center'>
                    <h4 className='uppercase text-[16px] leading-[180%] font-semibold'> date</h4>
                    <p>{getFormattedDate(post.date)}</p>
                </div>
                <div className='flex justify-between items-center'>
                <h4 className='uppercase text-[16px] leading-[180%] font-semibold'> read</h4>
                <p>2 mins</p>
                </div>
                <div className='flex justify-between items-center'>
                <h4 className='uppercase text-[16px] leading-[180%] font-semibold'> share</h4>
                </div>
            </div>
          </aside>
          <div className='w-[616px] flex flex-col gap-6 text-[20px] font-medium leading-[180%]'
           dangerouslySetInnerHTML={{__html:post.content?.rendered}}/>
        </div>
        <Line/>
        <div className='flex justify-between mt-12 '>
          <div className='text-[104px] font-semibold leading-[110%] uppercase '>latest posts</div>
          <div className='text-[16px] font-medium uppercase my-auto flex gap-2'>
            <p>see all </p>
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
           <path d="M16.172 11.0002L10.808 5.63617L12.222 4.22217L20 12.0002L12.222 19.7782L10.808 18.3642L16.172 13.0002H4V11.0002H16.172Z" fill="black" />
          </svg>

          </div>
        </div>
        <div className='grid grid-cols-3 mt-[67px] mb-48'>
        {
        list.map((item,index)=>{
          console.log(item);
            return (
             <Article key={index} post={item}/>
            )
        })
      }
        </div>
       
    </div>
  )
}

export default Detail