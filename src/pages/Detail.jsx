import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getFormattedDate, getPostApi } from '../utills/blog'
import Line from './Line'
import Article from './Article'
import Header from './Header'
import ava from '../assets/jack-finnigan-rriAI0nhcbc-unsplash 1.png'

const Detail = () => {
    const {slug} = useParams()
    const [post,setPost] = useState(null)
    const [list,setList] = useState([])
    const [perPage,setPerPage] = useState('3')
    const [search,setSearch] = useState('')
    const [categories,setcategories] = useState('1,28')
    const navigate = useNavigate();
    useEffect( () => {
        const data = getPostApi.get(`?slug=${slug}&_embed`).then(
          (res)=>{
      
          if( post === null) {
            setPost(res.data[0])}
          }
        )
       
    }, [])
  useEffect( () =>{
    const getData = getPostApi.get(`?per_page=${perPage}&search=${search}&categories=${categories}`).then(
      (data)=>{
        setList(data.data)
      }
    )
  },[])
  if(post===null) return 'loading'
  return (
    <div className='mx-20'>
      <div className='flex mt-[38px] justify-between'>
        <div onClick={() => navigate(-1)} className='flex uppercase font-bold'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
          <path d="M7.828 13.5L13.192 18.864L11.778 20.278L4 12.5L11.778 4.72202L13.192 6.13601L7.828 11.5L20 11.5V13.5L7.828 13.5Z" fill="black"/>
        </svg>
        go back
        </div>
        <div className='uppercase text-[32px] font-bold'>magazine</div>
      </div>
       <div className='flex items-start gap-[103px] my-24'>
          <h2 className='text-[104px] font-semibold flex-[1_0_0] leading-[110%] uppercase '>{post.title?.rendered}</h2>
          <div className='flex-[1_0_0] text-[20px] leading-[180%] font-medium' dangerouslySetInnerHTML={{__html:post.excerpt?.rendered}}/>
       </div>
       <div className='flex justify-between items-center'>
            <p className='text-xs'>{post.date}</p>
            <button className='border border-black rounded-[100px] py-2 px-3 uppercase'>LABEL</button>
        </div>
        <div className='w-full aspect-video overflow-hidden flex justify-center items-center mt-8 mb-20'> 
          {post._embedded['wp:featuredmedia']
          ?<img src={post._embedded['wp:featuredmedia']['0'].source_url}
                 alt="" 
                 height={409}
                 width={614}
                 className='w-full '
                 />
          :<img src={'https://via.placeholder.com/380x380'}
          alt="" 
          height={409}
          width={614}
          className='w-full '
          />
          } 
        </div>
        <div className='w-[1000px] mx-auto flex gap-16 items-start mb-48'>
          <aside>
            <div className='relative flex gap-4 items-center pb-8 border-b border-black '>
              <div>
              <img src={ava}
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
                <div className=''>
                <h4 className='uppercase text-[16px] leading-[180%] font-semibold flex justify-between items-center'>
                    <p> share</p>
                    <div className='flex gap-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={21} viewBox="0 0 20 21" fill="none">
                            <path d="M10.0003 8.00002C9.33729 8.00002 8.7014 8.26341 8.23256 8.73225C7.76372 9.2011 7.50033 9.83698 7.50033 10.5C7.50033 11.1631 7.76372 11.7989 8.23256 12.2678C8.7014 12.7366 9.33729 13 10.0003 13C10.6634 13 11.2993 12.7366 11.7681 12.2678C12.2369 11.7989 12.5003 11.1631 12.5003 10.5C12.5003 9.83698 12.2369 9.2011 11.7681 8.73225C11.2993 8.26341 10.6634 8.00002 10.0003 8.00002ZM10.0003 6.33335C11.1054 6.33335 12.1652 6.77234 12.9466 7.55374C13.728 8.33514 14.167 9.39495 14.167 10.5C14.167 11.6051 13.728 12.6649 12.9466 13.4463C12.1652 14.2277 11.1054 14.6667 10.0003 14.6667C8.89526 14.6667 7.83545 14.2277 7.05405 13.4463C6.27265 12.6649 5.83366 11.6051 5.83366 10.5C5.83366 9.39495 6.27265 8.33514 7.05405 7.55374C7.83545 6.77234 8.89526 6.33335 10.0003 6.33335ZM15.417 6.12502C15.417 6.40129 15.3072 6.66624 15.1119 6.86159C14.9165 7.05694 14.6516 7.16669 14.3753 7.16669C14.0991 7.16669 13.8341 7.05694 13.6388 6.86159C13.4434 6.66624 13.3337 6.40129 13.3337 6.12502C13.3337 5.84875 13.4434 5.5838 13.6388 5.38845C13.8341 5.1931 14.0991 5.08335 14.3753 5.08335C14.6516 5.08335 14.9165 5.1931 15.1119 5.38845C15.3072 5.5838 15.417 5.84875 15.417 6.12502ZM10.0003 3.83335C7.93866 3.83335 7.60199 3.83919 6.64283 3.88169C5.98949 3.91252 5.55116 4.00002 5.14449 4.15835C4.80417 4.2833 4.4965 4.48357 4.24449 4.74419C3.98366 4.99619 3.78312 5.30384 3.65783 5.64419C3.49949 6.05252 3.41199 6.49002 3.38199 7.14252C3.33866 8.06252 3.33366 8.38419 3.33366 10.5C3.33366 12.5617 3.33949 12.8984 3.38199 13.8575C3.41283 14.51 3.50033 14.9492 3.65783 15.355C3.79949 15.7175 3.96616 15.9784 4.24283 16.255C4.52366 16.535 4.78449 16.7025 5.14283 16.8409C5.55449 17 5.99283 17.0884 6.64283 17.1184C7.56283 17.1617 7.88449 17.1667 10.0003 17.1667C12.062 17.1667 12.3987 17.1609 13.3578 17.1184C14.0095 17.0875 14.4487 17 14.8553 16.8425C15.1951 16.7169 15.5026 16.5171 15.7553 16.2575C16.0362 15.9767 16.2037 15.7159 16.342 15.3575C16.5003 14.9467 16.5887 14.5075 16.6187 13.8575C16.662 12.9375 16.667 12.6159 16.667 10.5C16.667 8.43835 16.6612 8.10169 16.6187 7.14252C16.5878 6.49085 16.5003 6.05085 16.342 5.64419C16.2164 5.30419 16.0162 4.99665 15.7562 4.74419C15.5043 4.48323 15.1966 4.28266 14.8562 4.15752C14.4478 3.99919 14.0095 3.91169 13.3578 3.88169C12.4378 3.83835 12.1162 3.83335 10.0003 3.83335ZM10.0003 2.16669C12.2645 2.16669 12.547 2.17502 13.4353 2.21669C14.3228 2.25835 14.927 2.39752 15.4587 2.60419C16.0087 2.81585 16.472 3.10252 16.9353 3.56502C17.3591 3.9816 17.687 4.48551 17.8962 5.04169C18.102 5.57252 18.242 6.17752 18.2837 7.06502C18.3228 7.95335 18.3337 8.23585 18.3337 10.5C18.3337 12.7642 18.3253 13.0467 18.2837 13.935C18.242 14.8225 18.102 15.4267 17.8962 15.9584C17.6876 16.5148 17.3596 17.0189 16.9353 17.435C16.5186 17.8586 16.0148 18.1865 15.4587 18.3959C14.9278 18.6017 14.3228 18.7417 13.4353 18.7834C12.547 18.8225 12.2645 18.8334 10.0003 18.8334C7.73616 18.8334 7.45366 18.825 6.56533 18.7834C5.67783 18.7417 5.07366 18.6017 4.54199 18.3959C3.9856 18.1871 3.4816 17.8591 3.06533 17.435C2.6415 17.0185 2.3136 16.5146 2.10449 15.9584C1.89783 15.4275 1.75866 14.8225 1.71699 13.935C1.67783 13.0467 1.66699 12.7642 1.66699 10.5C1.66699 8.23585 1.67533 7.95335 1.71699 7.06502C1.75866 6.17669 1.89783 5.57335 2.10449 5.04169C2.31302 4.48517 2.641 3.98112 3.06533 3.56502C3.48172 3.14105 3.98568 2.81313 4.54199 2.60419C5.07366 2.39752 5.67699 2.25835 6.56533 2.21669C7.45366 2.17752 7.73616 2.16669 10.0003 2.16669Z" fill="black" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={21} viewBox="0 0 20 21" fill="none">
                            <path d="M18.4683 5.21333C17.8321 5.49474 17.1574 5.67956 16.4666 5.76167C17.1947 5.32619 17.7397 4.64084 17.9999 3.83333C17.3166 4.24 16.5674 4.525 15.7866 4.67917C15.2621 4.11798 14.5669 3.7458 13.809 3.62049C13.0512 3.49517 12.2732 3.62374 11.596 3.98621C10.9187 4.34868 10.3802 4.92474 10.0642 5.62483C9.74812 6.32492 9.67221 7.10982 9.84825 7.8575C8.46251 7.78804 7.10686 7.42794 5.86933 6.80055C4.63179 6.17317 3.54003 5.29254 2.66492 4.21583C2.35516 4.74788 2.19238 5.35269 2.19326 5.96833C2.19326 7.17667 2.80826 8.24417 3.74326 8.86917C3.18993 8.85175 2.64878 8.70232 2.16492 8.43333V8.47667C2.16509 9.28142 2.44356 10.0613 2.95313 10.6842C3.46269 11.3071 4.17199 11.7346 4.96075 11.8942C4.4471 12.0334 3.90851 12.0539 3.38576 11.9542C3.60814 12.6469 4.04159 13.2527 4.62541 13.6868C5.20924 14.1208 5.9142 14.3615 6.64159 14.375C5.91866 14.9428 5.0909 15.3625 4.20566 15.6101C3.32041 15.8578 2.39503 15.9285 1.48242 15.8183C3.0755 16.8429 4.93 17.3868 6.82409 17.385C13.2349 17.385 16.7408 12.0742 16.7408 7.46833C16.7408 7.31833 16.7366 7.16667 16.7299 7.01833C17.4123 6.52514 18.0013 5.91418 18.4691 5.21417L18.4683 5.21333Z" fill="black" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={21} viewBox="0 0 20 21" fill="none">
                            <path d="M17.9528 5.91498C18.3337 7.39998 18.3337 10.5 18.3337 10.5C18.3337 10.5 18.3337 13.6 17.9528 15.085C17.7412 15.9058 17.122 16.5516 16.3378 16.77C14.9137 17.1666 10.0003 17.1666 10.0003 17.1666C10.0003 17.1666 5.08949 17.1666 3.66283 16.77C2.87533 16.5483 2.25699 15.9033 2.04783 15.085C1.66699 13.6 1.66699 10.5 1.66699 10.5C1.66699 10.5 1.66699 7.39998 2.04783 5.91498C2.25949 5.09415 2.87866 4.44831 3.66283 4.22998C5.08949 3.83331 10.0003 3.83331 10.0003 3.83331C10.0003 3.83331 14.9137 3.83331 16.3378 4.22998C17.1253 4.45165 17.7437 5.09665 17.9528 5.91498ZM8.33366 13.4166L13.3337 10.5L8.33366 7.58331V13.4166Z" fill="black" />
                        </svg>
                    </div>
                </h4>
                </div>
            </div>
          </aside>
          <div className='w-[616px] flex flex-col gap-6 text-[20px] font-medium leading-[180%]'
           dangerouslySetInnerHTML={{__html:post.content?.rendered}}/>
        </div>
        <Line/>
        <div className='flex justify-between mt-12 '>
          <div className='text-[104px] font-semibold leading-[110%] uppercase '>latest posts</div>
          <div className='text-[16px] font-bold uppercase my-auto flex gap-2'>
            <p>see all </p>
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
           <path d="M16.172 11.0002L10.808 5.63617L12.222 4.22217L20 12.0002L12.222 19.7782L10.808 18.3642L16.172 13.0002H4V11.0002H16.172Z" fill="black" />
          </svg>

          </div>
        </div>
        <div className='grid grid-cols-3 mt-[67px] mb-48'>
        {
        list.map((item,index)=>{
          
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