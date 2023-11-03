import React, { useState } from 'react'

const Editor = () => {
    const [title,setTitle] = useState('')
    const [content,setContent] = useState('')
    const [cover,setCover] = useState('')
    const [style,setStyle] = useState('border-8 border-gray-200 h-[700px] w-[700px] justify-evenly flex')
  return (
    <div className='flex mx-20 my-10 gap-10'>
        <div className='border-8 border-gray-200 h-[700px] w-[300px] '>
            <div>
            <button onClick={()=>{setStyle('border-8 border-gray-200 h-[700px] w-[700px] justify-evenly flex flex-row-reverse')}}>style1</button>

            </div>
            <div>
            <button onClick={()=>{setStyle('border-8 border-gray-200 h-[700px] w-[700px] justify-evenly flex')}}>style2</button>

            </div>
            <div>
                <button onClick={()=>{setStyle('border-8 border-gray-200 h-[700px] w-[700px] justify-evenly flex flex-col')}}>style3</button>

            </div>
        </div>
        <div className='border-8 border-gray-200 h-[700px] w-[700px]'>
                         <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="post-title"
                            value={title}
                            type="text"
                            placeholder="Enter post title"
                            name="title"
                            required='required'
                            onChange={e=>setTitle(e.target.value)}
                        /> 
                         <textarea
                            className="shadow appearance-none border rounded  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="content"
                            required='required'
                            value={content}
                            onChange={e=>setContent(e.target.value)}
                            placeholder="Enter post content"
                           
                        ></textarea>
                        <input
                            className="shadow appearance-none  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="post-title"
                            type="text"
                            value={cover}
                            placeholder='Enter image url'
                            onChange={e=>setCover(e.target.value)}
                            name="cover"    
                            
                        />
        </div>
        <div className={style} >
            <div>
                <h1>{title}</h1>
                <h3>{content}</h3>
            </div>
            <div>
            <img src={cover} className='w-[100px]' alt="" />

            </div>
        </div>
    </div>
  )
}

export default Editor