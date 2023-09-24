import React from 'react'
import { authorsList } from '../../../utills/blog'
import Author from '../Author'


const HomeAuthors = () => {
  return (
    <div className='grid grid-cols-2'>
       {
        authorsList.map((item,index)=>{
            return <Author key={index} author={item} />
        })
       }
    </div>
  )
}

export default HomeAuthors