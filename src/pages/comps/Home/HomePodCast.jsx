import React from 'react'

const HomePodCast = ({img,mess}) => {
  return (
        <div className='border border-black '>
            <div className='p-12  '>
            <img className='w-full' src={img} alt="" />
            <p className='2xl:text-[32px] font-bold text-left mb-12 mt-8'>{mess}</p>
            <div className='flex gap-4'>
                <div className='flex gap-2'> <span className='text-[14px] font-bold'>Date
                </span> <span className='text-[14px] font-normal'>16.06.2022</span>
                </div>
                <div className='flex gap-2'> <span className='text-[14px] font-bold'>Duration
                </span> <span className='text-[14px] font-normal'>60 Min</span>
                </div>  
            </div>
            </div>
        </div>
  )
}

export default HomePodCast