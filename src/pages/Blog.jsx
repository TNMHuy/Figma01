import React, { useEffect, useState } from 'react'
import { getPostApi } from '../utills/blog'
import { Link } from 'react-router-dom'
import Article from './Article'



const Blog = () => {
  const [list,setList] = useState([])
  const [perPage,setPerPage] = useState('9')
  const [search,setSearch] = useState('')
  const [categories,setcategories] = useState('1,28')
  useEffect( () => {
      const data = getPostApi.get(`?per_page=${perPage}&search=${search}&categories=${categories}`).then(
        (res)=>{
          setList(res.data)
        }
      )
       
  }, [search,categories,perPage])
  // console.log(list);
  return (
    <div className='mx-20 mb-48' >
        <label className='text-4 font-semibold uppercase' >categories :</label>
        <select value={categories} onChange={event => setcategories(event.target.value)}>
        <option value="1">Categories 1</option>
        <option value="28">Categories 2</option>
        <option value="1,28">All </option>
        </select>
    <input className='ml-2 border border-black' type='text' value={search} placeholder='search' onChange={event => setSearch(event.target.value)}/>
      <div className=' grid grid-cols-3 mt-[67px] mb-24'>

      {
        list.map((item,index)=>{
          // console.log(item);
            return (
             <Article key={index} post={item}/>
            )
        })
      }
      </div>
      <div className='text-[16px] font-semibold uppercase my-auto flex gap-2 justify-end'>next
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
          <path d="M16.172 11.0002L10.808 5.63617L12.222 4.22217L20 12.0002L12.222 19.7782L10.808 18.3642L16.172 13.0002H4V11.0002H16.172Z" fill="black" />
          </svg>
      </div>
    </div>
  )
}

export default Blog