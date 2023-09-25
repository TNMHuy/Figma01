// import axios from 'axios';
// import React, { useState, useEffect } from 'react';

import NewTickets from "./NewTickets"
import HomeBody from "./comps/HomeBody"
import React, { useEffect, useState } from 'react'
import { getPostApi } from '../utills/blog'


const Home = () => {
  const [list,setList] = useState([])
  const [perPage] = useState('6')
  const [search] = useState('')
  const [categories] = useState('1,28')
  useEffect( () => {
      const data = getPostApi.get(`?per_page=${perPage}&search=${search}&categories=${categories}&_embed`).then(
        (res)=>{
          setList(res.data)
        }
      )
       
  }, [search,categories,perPage])
  
  return (
    <div className="mx-20  ">
     <div className="py-12 overflow-hidden ">
        <div className="mx-auto flex justify-center items-center  ">
        <svg  xmlns="http://www.w3.org/2000/svg" width={1520} height={216} viewBox="0 0 1520 216" fill="none">
          <path d="M160.207 212.622H208.476L129.113 0H79.9553L0 212.622H45.308L61.5952 167.018H144.216L160.207 212.622ZM103.35 49.1577L131.778 131.186H74.3288L103.35 49.1577Z" fill="black" />
          <path d="M279.39 212.622V137.405H307.523L355.496 212.622H409.095L354.311 130.594C384.517 120.525 402.284 97.7232 402.284 68.9985C402.284 24.875 371.191 0 317.591 0H234.378V212.622H279.39ZM279.39 37.3125H315.518C342.762 37.3125 357.273 47.9732 357.273 68.9985C357.273 89.7276 342.762 100.388 315.518 100.388H279.39V37.3125Z" fill="black" />
          <path d="M528.688 212.622V40.5699H595.91V0H416.751V40.5699H483.676V212.622H528.688Z" fill="black" />
          <path d="M759.865 96.5387C746.539 82.0283 740.616 74.0327 740.616 63.0759C740.616 50.9345 749.204 42.3467 760.753 42.3467C772.894 42.3467 781.482 49.75 782.963 63.6681H821.164C820.868 31.0937 796.881 9.47619 760.753 9.47619C724.921 9.47619 698.269 31.9821 698.269 62.7797C698.269 74.9211 701.823 85.5818 709.226 95.9464C686.72 108.68 673.098 127.632 673.098 150.138C673.098 189.82 701.527 215.287 745.947 215.287C765.491 215.287 783.555 207.884 799.546 193.966L817.018 212.622H867.656L823.237 164.649C832.121 148.065 838.043 127.632 838.339 109.865H800.731C800.435 119.341 799.546 128.817 797.769 137.405L759.865 96.5387ZM712.484 147.769C712.484 135.628 719.295 125.856 730.252 120.229L778.521 171.46C770.229 178.271 759.865 181.824 748.908 181.824C724.921 181.824 712.484 166.722 712.484 147.769Z" fill="black" />
          <path d="M1089.26 212.622V172.052H996.871V0H951.859V212.622H1089.26Z" fill="black" />
          <path d="M1165.18 212.622V0H1120.17V212.622H1165.18Z" fill="black" />
          <path d="M1253.67 212.622V131.482H1331.55V92.6889H1253.67V39.0893H1346.06V0H1208.66V212.622H1253.67Z" fill="black" />
          <path d="M1520 173.533H1421.98V122.598H1509.04V83.805H1421.98V39.0893H1517.93V0H1376.97V212.622H1520V173.533Z" fill="black" />
        </svg>
        </div>

     </div>

      <NewTickets/>
      <HomeBody  post={list}/>
    </div>
  )
}

export default Home