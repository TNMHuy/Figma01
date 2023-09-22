import React from 'react'

const DetailPodcast = ({item,index}) => {
  console.log(index);
  return (
    <div>
        <div id='subBody' className={index===4?'flex pb-12 mb-48 items-center justify-between':'flex border-b border-black pb-12 mb-12 items-center justify-between'}>
                <div className='flex gap-16 items-center'>
                    <div className='text-[24px] font-bold'>{item.number}</div>
                    <div><img src={item.img} alt="" /></div>
                    <p className='2xl:text-[32px] xl:text-[28px] lg:text-[20px] font-bold leading-[120%] 2xl:w-[500px] xl:w-[195px] lg:w-[100px] text-left  '>The Problem of today’s cultural development</p>
                </div>
                <div className='flex gap-16 '>
                <div className='flex justify-between items-center gap-2'>
                    <h4 className='uppercase text-[14px] leading-[180%] font-bold'> date</h4>
                    <p>16. March 2022</p>
                </div>
                <div className='flex justify-between items-center gap-2'>
                <h4 className='uppercase text-[14px] leading-[180%] font-bold'> duration</h4>
                <p>1hr 20min</p>
                </div>
                <div className='text-[16px] font-bold uppercase my-auto flex gap-2'>
                    <p>listen </p>
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                    <path d="M16.172 11.0002L10.808 5.63617L12.222 4.22217L20 12.0002L12.222 19.7782L10.808 18.3642L16.172 13.0002H4V11.0002H16.172Z" fill="black" />
                    </svg>

                </div>
                </div>

            </div>
    </div>
  )
}

export default DetailPodcast