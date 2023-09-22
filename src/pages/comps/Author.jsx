import React from 'react'

const Author = ({author}) => {
  return (
    <div className='grid grid-cols-4 2xl:gap-12 xl:gap-8 lg:gap-4 md:gap-2 border border-black p-8'>
        <div className=' col-span-1 ' >
            <img className='rounded-full w-full' src={author.img} alt="" />
        </div>
        <div className='col-span-3 flex justify-start items-center'>
            <div>
            <p className='2xl:text-[32px] lg:text-[20px] md:text-[16px]  font-bold w-[368px] break-normal '>{author.name}</p>
                <div className='flex gap-4 mt-4'>
                    <div className='flex gap-2'> <span className='text-[14px] font-bold'>Job
                    </span> <span className='text-[14px] font-normal'>{author.job}</span>
                    </div>
                    <div className='flex gap-2'> <span className='text-[14px] font-bold'>City
                    </span> <span className='text-[14px] font-normal'>{author.city}</span>
                    </div>  
                </div>
            </div>
        </div>
</div>
  )
}

export default Author