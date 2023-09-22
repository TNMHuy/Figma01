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
  useEffect (()=>{
    window.scrollTo({top:0})
  },[])
  // console.log(list);
  return (
    <div className='mx-20 mb-48' >
           <div className="py-12  mb-24 ">
        <div className="mx-auto flex justify-center items-center  ">
           <svg xmlns="http://www.w3.org/2000/svg" width={1520} height={215} viewBox="0 0 1520 215" fill="none">
              <path d="M93.591 210.436H130.051L184.598 72.3465V210.436H224.217V4.30633H171.966L111.965 157.038L52.2502 4.30633H0V210.436H39.6183V73.4948L93.591 210.436Z" fill="black" />
              <path d="M404.145 210.436H450.941L374.001 4.30633H326.344L248.83 210.436H292.755L308.545 166.225H388.642L404.145 210.436ZM349.024 51.9631L376.585 131.487H320.889L349.024 51.9631Z" fill="black" />
              <path d="M558.162 214.743C623.905 214.743 664.672 166.512 662.088 99.3328H555.865V134.071H615.58C609.838 159.622 590.603 177.708 560.171 177.708C518.831 177.708 496.725 147.277 496.725 107.658C496.725 63.4467 521.989 39.0441 555.291 39.0441C582.851 39.0441 601.799 54.834 608.115 75.7915H659.504C646.011 31.0056 608.689 0 556.439 0C496.151 0 451.939 45.6472 451.939 106.51C451.939 170.244 498.447 214.743 558.162 214.743Z" fill="black" />
              <path d="M819.359 210.436H866.155L789.215 4.30633H741.558L664.044 210.436H707.968L723.758 166.225H803.856L819.359 210.436ZM764.238 51.9631L791.798 131.487H736.103L764.238 51.9631Z" fill="black" />
              <path d="M1044.28 210.436V172.828H934.903L1040.84 39.3312V4.30633H882.079V41.915H987.154L881.792 175.986V210.436H1044.28Z" fill="black" />
              <path d="M1119.66 210.436V4.30633H1076.02V210.436H1119.66Z" fill="black" />
              <path d="M1296.17 210.436H1338.95V4.30633H1298.76V140.961L1208.9 4.30633H1161.81V210.436H1201.72V66.6047L1296.17 210.436Z" fill="black" />
              <path d="M1520 172.541H1424.97V123.161H1509.38V85.5526H1424.97V42.2021H1517.99V4.30633H1381.34V210.436H1520V172.541Z" fill="black" />
            </svg>

        </div>

     </div>
        <label className='text-4 font-bold uppercase' >categories :</label>
        <select value={categories} onChange={event => setcategories(event.target.value)}>
        <option value="1">Categories 1</option>
        <option value="28">Categories 2</option>
        <option value="1,28">All </option>
        </select>
    <input className='ml-2 border border-black px-2' type='text' value={search} placeholder='search' onChange={event => setSearch(event.target.value)}/>
      <div className=' grid grid-cols-3 mt-[67px] mb-24 '>

      {
        list.map((item,index)=>{
          // console.log(item);
            return (
             <Article key={index} post={item}/>
            )
        })
      }
      </div>
      <div className=' flex justify-end'>
        <button className='flex gap-2' >
            <p className='text-[16px] font-semibold uppercase'>next</p>
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
            <path d="M16.172 11.0002L10.808 5.63617L12.222 4.22217L20 12.0002L12.222 19.7782L10.808 18.3642L16.172 13.0002H4V11.0002H16.172Z" fill="black" />
            </svg>
        </button>
      </div>
      
    </div>
  )
}

export default Blog