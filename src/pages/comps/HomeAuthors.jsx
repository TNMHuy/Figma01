import React from 'react'
import au1 from '../../assets/jack-finnigan-rriAI0nhcbc-unsplash 1.png'
import au2 from '../../assets/bekah-allmark-Qt0ogPnhGWY-unsplash 1.png'
import au3 from '../../assets/olena-sergienko-0TSd6uCKTKc-unsplash 1.png'
import au4 from '../../assets/metin-ozer-iSmTwuKTNDo-unsplash 1.png'
import au5 from '../../assets/jeffery-erhunse-vp9mRauo68c-unsplash 1.png'
import au6 from '../../assets/emiliano-vittoriosi-fIM5oAdHAxE-unsplash 1.png'

const HomeAuthors = () => {
  return (
    <div className='columns-2 gap-0'>
        <div className='flex border border-black p-8 xl:gap-12 lg:gap-4 md:gap-0  items-center'>
            <div >
                <img className='rounded-full' src={au1} alt="" />
            </div>
            <div>
                  <p className='text-[32px] lg:text-[20px] md:text-[16px]  font-bold w-[368px] break-normal '>Jakob Grønberg</p>
                    <div className='flex gap-4'>
                        <div className='flex gap-2'> <span className='text-[14px] font-bold'>Job
                        </span> <span className='text-[14px] font-normal'>Artist</span>
                        </div>
                        <div className='flex gap-2'> <span className='text-[14px] font-bold'>City
                        </span> <span className='text-[14px] font-normal'>Berlin</span>
                        </div>  
                    </div>
            </div>
        </div>
        <div className='flex border border-black p-8 xl:gap-12 lg:gap-4 md:gap-0  items-center'>
            <div >
                <img className='rounded-full' src={au2} alt="" />
            </div>
            <div>
                  <p className='text-[32px] lg:text-[20px] md:text-[16px] font-bold p- w-[368px] break-normal '>Anna Nielsen</p>
                    <div className='flex gap-4'>
                        <div className='flex gap-2'> <span className='text-[14px] font-bold'>Job
                        </span> <span className='text-[14px] font-normal'>Columnists</span>
                        </div>
                        <div className='flex gap-2'> <span className='text-[14px] font-bold'>City
                        </span> <span className='text-[14px] font-normal'>Copenhagen</span>
                        </div>  
                    </div>
            </div>
        </div>
        <div className='flex border border-black p-8 xl:gap-12 lg:gap-4 md:gap-0  items-center'>
            <div >
                <img className='rounded-full' src={au3} alt="" />
            </div>
            <div>
                  <p className='text-[32px] lg:text-[20px] md:text-[16px] font-bold  w-[368px] break-normal '>Louise Jensen</p>
                    <div className='flex gap-4'>
                        <div className='flex gap-2'> <span className='text-[14px] font-bold'>Job
                        </span> <span className='text-[14px] font-normal'>Artist</span>
                        </div>
                        <div className='flex gap-2'> <span className='text-[14px] font-bold'>City
                        </span> <span className='text-[14px] font-normal'>Stockholm</span>
                        </div>  
                    </div>
            </div>
        </div>
        <div className='flex border border-black p-8 xl:gap-12 lg:gap-4   items-center'>
            <div >
                <img className='rounded-full ' src={au4} alt="" />
            </div>
            <div>
                  <p className='text-[32px] lg:text-[20px] md:text-[16px] font-bold  w-[368px] break-normal '>Anne Henry</p>
                    <div className='flex gap-4'>
                        <div className='flex gap-2'> <span className='text-[14px] font-bold'>Job
                        </span> <span className='text-[14px] font-normal'>Artist</span>
                        </div>
                        <div className='flex gap-2'> <span className='text-[14px] font-bold'>City
                        </span> <span className='text-[14px] font-normal'>New York</span>
                        </div>  
                    </div>
            </div>
        </div>
        <div className='flex border border-black p-8 xl:gap-12 lg:gap-4 md:gap-0  items-center'>
            <div >
                <img className='rounded-full' src={au5} alt="" />
            </div>
            <div>
                  <p className='text-[32px] lg:text-[20px] md:text-[16px] font-bold  w-[368px] break-normal '>Jane Cooper</p>
                    <div className='flex gap-4'>
                        <div className='flex gap-2'> <span className='text-[14px] font-bold'>Job
                        </span> <span className='text-[14px] font-normal'>Artist</span>
                        </div>
                        <div className='flex gap-2'> <span className='text-[14px] font-bold'>City
                        </span> <span className='text-[14px] font-normal'>New York</span>
                        </div>  
                    </div>
            </div>
        </div>
        <div className='flex border border-black p-8 xl:gap-12 lg:gap-4 md:gap-0  items-center'>
            <div >
                <img className='rounded-full' src={au6} alt="" />
            </div>
            <div>
                  <p className='text-[32px] lg:text-[20px] md:text-[16px] font-bold  w-[368px] break-normal '>Cristofer Vaccaro</p>
                    <div className='flex gap-4'>
                        <div className='flex gap-2'> <span className='text-[14px] font-bold'>Job
                        </span> <span className='text-[14px] font-normal'>Artist</span>
                        </div>
                        <div className='flex gap-2'> <span className='text-[14px] font-bold'>City
                        </span> <span className='text-[14px] font-normal'>Lisbon</span>
                        </div>  
                    </div>
            </div>
        </div>
        
    </div>
  )
}

export default HomeAuthors