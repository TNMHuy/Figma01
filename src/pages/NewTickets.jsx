import React from 'react'

const NewTickets = () => {
  return (
    <div className='flex p-5 bg-black text-white items-center gap-6'>
      <div className='uppercase font-semibold text-2xl'>new ticket++</div>
      <div className=' overflow-hidden w-5/6'>
        <p className='w-[1000px] animate-marqueeText whitespace-nowrap '>
          <span className='bg-blue-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit +++</span>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit +++</span>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit +++</span>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit +++</span>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit +++</span>
          <span className='bg-red-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit +++</span>
        </p>
      </div>
    </div>
  )
}

export default NewTickets