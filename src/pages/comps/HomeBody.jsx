import React from 'react'
import SubHomeBody from './Home/SubHomeBody';
import bg from '../../assets/background.png'
import circle from '../../assets/circle.png'
import arrow from '../../assets/arrow.png'
import HomePodCast from './Home/HomePodCast';
import ep5 from '../../assets/EP05.png'
import ep4 from '../../assets/ep04.png'
import ep3 from '../../assets/ep03.png'
import img from '../../assets/dimitar-belchev-fRBpWLAcWIY-unsplash 1.png'
import HomeAuthors from './Home/HomeAuthors';
import { Link } from 'react-router-dom';
const mess5 = "The Problem of today's cultural development"
const mess4 = "The hidden messages of Jack Nielso"
const mess3 = "Behind the scenes of the street art culture"

const HomeBody = ({post}) => {
   

  return (
    <div>
        <div className='flex pt-16 pb-12'>
            <div className='flex-1 text-[104px] lg:text-[70px]  md:text-[60px]  font-bold leading-[110%] uppercase -tracking-tighter '>don't close
            <br/> your eyes</div>
            <div className='flex-1 flex-col '>
                <p className='text-[18px] font-normal pt-4 pb-16'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.</p>
                <div className='flex justify-between items-center'>
                    <p className='text-xs'>2023-08-28T19:08:12</p>
                    <button className='border border-black rounded-[100px] py-2 px-3 uppercase'>LABEL</button>
                </div>
            </div>
        </div>
        <div > 
            <img className='w-full h-[1026px]' src={img} alt="" />
            
        </div>
        <div>

        </div>

    <div className='flex mt-12 gap-24 ' id='posts'>  
            <div className='w-3/4 '>
                {
                    post.map((item,index)=>{
                        return (<SubHomeBody key={index} post={item} index={index}/>)
                    })
                    
                }
               
                <div className='flex  gap-2 mt-24 mb-12'>
                    <Link to="/blog"  href="#top" className='uppercase text-[16px] font-bold'>all articles</Link>
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} viewBox="0 0 24 25" fill="none">
                            <path d="M16.172 11.2873L10.808 5.92328L12.222 4.50928L20 12.2873L12.222 20.0653L10.808 18.6513L16.172 13.2873H4V11.2873H16.172Z" fill="black" />
                        </svg>

                </div>
            </div>
            <div className='' >
                <p className='text-[16px] font-bold mb-2 uppercase '>printmagazine</p>
                <p className='text-[48px] font-bold mb-8'>03/2022</p>
                <div className='relative w-[369px] h-[488px] '>
                    <div className='text-w absolute top-2  z-10 text-white ml-[24px] '>
                        <p className='text-[96px] font-semibold leading-[100%] uppercase'>fyrre</p>
                        <br/>
                        <p className='text-[24px] font-semibold uppercase ml-[6px] mt-[-30px]'>magazin</p>
                    </div>
                    <img className='absolute sm:w-[60%] md:w-[80%] lg:w-[100%]' src={bg} alt="" />
                    <img className='absolute left-5 bottom-24' src={circle} alt="" />
                    <img className='absolute right-7 bottom-16' src={arrow} alt="" />
                    <div className='absolute text-white text-[24px] font-semibold uppercase left-9 bottom-14'>03/2022</div>
                    <div className='flex flex-col items-center gap-1 absolute left-9 bottom-28 rotate-[-10deg]  font-semibold  text-white'>
                        <p className='text-[10px]'>EXCLUSIVE</p>
                        <div className='flex flex-col items-center '>
                            <div>JACOB</div>
                            <div className='mt-[-5px]'> GRONBERG</div>
                        </div>
                        <div className='w-[30px] h-[1px] bg-white'></div>

                        <div className='text-[10px]'>INTERVIEW</div>
                    </div>
                </div>
                <button className='bg-black text-white h-[50px] w-[106px] uppercase'>button</button>
                <div className='border-b border-black pb-6 mb-6' >
                    <div className='text-[16px] font-bold uppercase mt-16 mb-8'>most popular</div>
                    <div className='flex'>
                        <div className='text-[24px] font-bold w-1/6'>01</div>
                        <div className=''>
                            <p className='text-[24px] font-bold mb-2 '>Street art festival</p>
                            <div className='flex gap-2'> <span className='text-[14px] font-bold'>Text </span> <span className='text-[14px] font-normal'>Cristofer Vaccaro</span></div>
                            
                        </div>
                    </div>
                </div>
                <div className='border-b border-black pb-6 mb-6' >
                    
                    <div className='flex'>
                        <div className='text-[24px] font-bold w-1/6'>02</div>
                        <div className=''>
                            <p className='text-[24px] font-bold mb-2 '>Hope die last </p>
                            <div className='flex gap-2'> <span className='text-[14px] font-bold'>Text
                             </span> <span className='text-[14px] font-normal'>Anne Henry</span></div>
                            
                        </div>
                    </div>
                </div>
                <div className='mb-16' >
                    
                    <div className='flex'>
                        <div className='text-[24px] font-bold w-1/6'>03</div>
                        <div className=''>
                            <p className='text-[24px] font-bold mb-2 '>Artists who want to rise above</p>
                            <div className='flex gap-2'> <span className='text-[14px] font-bold'>Text
                             </span> <span className='text-[14px] font-normal'>Anna Nielsen</span></div>
                            
                        </div>
                    </div>
                </div>
                <div className='p-[30px] bg-[#F8F8F8]'>
                    <div className='text-[16px] font-bold uppercase'>newsletter</div>
                    <div className='text-[32px] font-bold leading-[130%] mt-1 mb-2'>Design News to
                        <br/>
                        your inbox
                     </div>
                     <div>
                     <input type="email" className='px-[15px] h-[50px] w-full my-4' placeholder='Email' />
                     </div>
                    <div className='flex justify-end'>
                     <button className='bg-black text-white h-[50px] w-[106px] uppercase  '>sign up</button>

                    </div>

                </div>
            </div>
    </div>
    <div className='border-b border-t pt-10  border-black' id='podcasts'>
        <div className='flex justify-between items-center mb-24'>
            <div className='2xl:text-[104px] xl:text-[80px] lg:text-[70px] md:text-[50px] font-bold uppercase ml-[-5px]'>podcast</div>
            <div className='flex  gap-2 mt-24 mb-12'>
                <Link to="/podcast"  className='uppercase text-[16px] font-bold'>all episodes</Link>
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} viewBox="0 0 24 25" fill="none">
                    <path d="M16.172 11.2873L10.808 5.92328L12.222 4.50928L20 12.2873L12.222 20.0653L10.808 18.6513L16.172 13.2873H4V11.2873H16.172Z" fill="black" />
                </svg>

    </div>
        </div>
        <div className=' columns-3 justify-betwee pb-48 gap-0 '>
            <HomePodCast img={ep5} mess={mess5}/>
            <HomePodCast img={ep4} mess={mess4}/>
            <HomePodCast img={ep3} mess={mess3}/>
        </div>

    </div>
    <div className='mb-48' id='authors'>
        <div className='flex justify-between items-center mb-24 '>
                <div className='2xl:text-[104px] lg:text-[70px] md:text-[50px]  font-bold uppercase ml-[-5px]'>authors</div>
                <div className='flex  gap-2 '>
                    <Link to='./about'  className='uppercase text-[16px] font-bold'>all authors</Link>
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} viewBox="0 0 24 25" fill="none">
                        <path d="M16.172 11.2873L10.808 5.92328L12.222 4.50928L20 12.2873L12.222 20.0653L10.808 18.6513L16.172 13.2873H4V11.2873H16.172Z" fill="black" />
                    </svg>

                </div>
        </div>
        <HomeAuthors/>

    </div>
    </div>
  )
}

export default HomeBody