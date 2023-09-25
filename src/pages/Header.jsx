import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../utills/loginContext'

const Header = () => {
  const user = useContext(UserContext)
  console.log(user);

  return (
    <div className='  px-20 w-full '>
        <div className='  border-b border-black h-[90px] flex justify-center items-center w-full ' >
            <div className='flex w-full '>
             <Link to="/" className='flex-[1_0_0] text-[22px]  font-bold uppercase items-center'>
            fyre magazine
            </Link>
             <div className='flex justify-end flex-[1_0_0] items-center gap-6 pb-4 text-[20px] font-normal' >
                <Link to="/blog">Magazine</Link>
                <Link to="/about">Authors</Link>
                <Link to="/podcast">Postcast</Link>
                <Link to="/login" className='flex items-center gap-2'>Log in
                <svg fill="#000000" height="20px" width="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 499.1 499.1" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M0,249.6c0,9.5,7.7,17.2,17.2,17.2h327.6l-63.9,63.8c-6.7,6.7-6.7,17.6,0,24.3c3.3,3.3,7.7,5,12.1,5s8.8-1.7,12.1-5 l93.1-93.1c6.7-6.7,6.7-17.6,0-24.3l-93.1-93.1c-6.7-6.7-17.6-6.7-24.3,0c-6.7,6.7-6.7,17.6,0,24.3l63.8,63.8H17.2 C7.7,232.5,0,240.1,0,249.6z" /> <path d="M396.4,494.2c56.7,0,102.7-46.1,102.7-102.8V107.7C499.1,51,453,4.9,396.4,4.9H112.7C56,4.9,10,51,10,107.7V166 c0,9.5,7.7,17.1,17.1,17.1c9.5,0,17.2-7.7,17.2-17.1v-58.3c0-37.7,30.7-68.5,68.4-68.5h283.7c37.7,0,68.4,30.7,68.4,68.5v283.7 c0,37.7-30.7,68.5-68.4,68.5H112.7c-37.7,0-68.4-30.7-68.4-68.5v-57.6c0-9.5-7.7-17.2-17.2-17.2S10,324.3,10,333.8v57.6 c0,56.7,46.1,102.8,102.7,102.8H396.4L396.4,494.2z" /> </g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </g> </g></svg>

                </Link>
                <p className='w-[15px] h-[1px] bg-black'></p>
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
                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={21} viewBox="0 0 20 21" fill="none">
                        <path d="M2.5 3C10.7842 3 17.5 9.71583 17.5 18H15C15 11.0967 9.40333 5.5 2.5 5.5V3ZM2.5 8.83333C7.5625 8.83333 11.6667 12.9375 11.6667 18H9.16667C9.16667 16.2319 8.46429 14.5362 7.21405 13.286C5.9638 12.0357 4.26811 11.3333 2.5 11.3333V8.83333ZM2.5 14.6667C3.38405 14.6667 4.2319 15.0179 4.85702 15.643C5.48214 16.2681 5.83333 17.1159 5.83333 18H2.5V14.6667Z" fill="black" />
                    </svg>
                </div>


             </div>
            </div>
       
        </div>
        
    </div>
    
  )
}

export default Header