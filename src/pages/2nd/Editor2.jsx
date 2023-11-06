import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

const Editor2 = () => {
    const [title,setTitle] = useState('')
    const [content,setContent] = useState([])
    const [cover,setCover] = useState('')
    const [text,setText] = useState('')
    const [src,setSrc] = useState('')
    const [type,setType] = useState(null)
    const {id} = useParams()
    const [post,setPost] = useState([])
    const navigate = useNavigate()
    const token = useSelector((state)=>state.auth.user.accessToken)
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
   
    useEffect( () =>{
      const getData = axios.get(`https://advanced-blog.glitch.me/v1/post/`+id).then(
        (data)=>{
          setPost(data.data)
          setTitle(data.data.title)
          setContent(data.data.content)
          setCover(data.data.cover)
        }
        )
      },[])
    const handleEdit= async(e) =>{
      // e.preventDefault()
    
      const formData = {
        title: title ,
        content: content,
        cover: cover
      }
      const headers = { token: `Bearer ${token}`};
      const response = await axios.put(`https://advanced-blog.glitch.me/v1/post/`+id,
      formData, {headers: headers} )
      console.log(response);
      if (response.status===200){
        navigate('/blog2')
      }
    }
    const handleDelete =()=>{

    }
    console.log(content);
   
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
                                        <div key={index} className='text-yellow-400 font-serif'>{item.text}
                                            
                                        </div>
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
            <button className=' hover:bg-zinc-400 rounded-3xl p-2 w-full ' onClick={handleEdit}>Edit</button>
        </div>
    </div>
  )
}

export default Editor2