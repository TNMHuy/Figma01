import axios from 'axios'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const Editor = () => {
    const [title,setTitle] = useState('')
    const [content,setContent] = useState([])
    const [cover,setCover] = useState('')
    const [text,setText] = useState('')
    const [src,setSrc] = useState('')
    const [type,setType] = useState(null)
    const handleContent =()=>{
        setContent(prev=>[...prev,{
            type:type,
            text:text,
            src:src
        }])
        setText('')
        setSrc('')
    }
    // console.log(content);
    const token = useSelector(state=>state.auth.user.accessToken)
    const handleCreate =()=>{
        const headers = { token: `Bearer ${token}`};    
        
        const data = {
            title:title,
            content:content,
            cover:cover
        }
        const res = axios.post('https://advanced-blog.glitch.me/v1/post',data,{headers:headers})
    }
    console.log(token);
  return (
    <div className='flex mx-20 my-10 gap-10'>
        <div className='border-8 border-gray-200 h-[700px] w-[300px] '>
            <div>
            <button className=' hover:bg-zinc-400 rounded-3xl p-2 w-full' onClick={()=>{setType('1')}}>Type1</button>

            </div>
            <div>
            <button className=' hover:bg-zinc-400 rounded-3xl p-2 w-full' onClick={()=>{setType('2')}}>Type2</button>

            </div>
            <div>
            <button className=' hover:bg-zinc-400 rounded-3xl p-2 w-full' onClick={()=>{setType('3')}}>Type3</button>

            </div>
        </div>
        <div className='border-8 border-gray-200 h-[700px] w-[700px]'>
                         {/* <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="post-title"
                            value={title}
                            type="text"
                            placeholder="Enter post title"
                            name="title"
                            required='required'
                            onChange={e=>setTitle(e.target.value)}
                        />  */}
                         <textarea
                            className="shadow appearance-none border rounded  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="text"
                            required='required'
                            value={text}
                            onChange={e=>setText(e.target.value)}
                            placeholder="Enter text"
                           
                        ></textarea>
                        <input
                            className="shadow appearance-none  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="post-title"
                            type="text"
                            value={cover}
                            placeholder='Enter cover url'
                            onChange={e=>setCover(e.target.value)}
                            name="cover"    
                            
                        />
                        <input
                            className="shadow appearance-none  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="post-title"
                            type="text"
                            value={src}
                            placeholder='Enter image url'
                            onChange={e=>setSrc(e.target.value)}
                            name="cover"    
                            
                        />
                        <button className=' hover:bg-zinc-400 rounded-3xl p-2 w-full' onClick={handleContent}>Update</button>
        </div>
        <div className='w-full border-8 border-gray-200 h-[700px] ' >
            <div className='w-full'>
                <input className='border border-black w-full' placeholder='Enter title' type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />
                {/* <h3>{content}</h3> */}
                <div>
                    {
                        content.map((item,index)=>{
                            switch (item.type) {
                                case '1':
                                    return (
                                        <div key={index} className='text-yellow-400 font-serif'>{item.text}</div>
                                    )
                                    break;
                                case '2':
                                    return (
                                        <div key={index} className='text-green-400 font-serif'>{item.text}</div>
                                        
                                    )
                                    break;
                                case '3':
                                    return (
                                        <div key={index} className='text-blue-500 font-serif'>{item.text}</div>
                                    )
                                    break;
                            
                                default:
                                    break;
                            }
                        })
                    }
                </div>
            </div>
            <div>
            <img src={cover} className='w-[100px]' alt="" />

            </div>
            <button className=' hover:bg-zinc-400 rounded-3xl p-2 w-full ' onClick={handleCreate}>Create</button>
        </div>
    </div>
  )
}

export default Editor