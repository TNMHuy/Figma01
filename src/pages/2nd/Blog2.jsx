import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import Article from '../Article'
import { getPostApi2 } from '../../utills/blog'
import Article2 from './Article2'
const Blog2 = () => {
  const [list,setList] = useState([])

    useEffect( () => {
        const data = getPostApi2.get().then(
          (res)=>{
            setList(res.data)
            console.log(res);
          }
        )
        .catch ((err)=>{
            console.log("error");
          })
       
        
    }, [])
  return (
    <div className=' grid grid-cols-3 mt-[67px] mb-24 '>

      {
        list.map((item,index)=>{
          // console.log(item);
            return (
             <Article2 key={index} post={item}/>
            )
        })
      }
      </div>
  )
}

export default Blog2