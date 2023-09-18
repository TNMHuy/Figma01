import React from 'react'
import img5 from '../assets/podcast/5.png'
import img4 from '../assets/podcast/4.png'
import img3 from '../assets/podcast/3.png'
import img2 from '../assets/podcast/2.png'
import img1 from '../assets/podcast/1.png'
const Podcast = () => {
  return (
    <div className="py-12 mx-20 ">
        <div className="mx-auto flex justify-center items-center  ">
         <svg xmlns="http://www.w3.org/2000/svg" width="1520" height="236" viewBox="0 0 1520 236" fill="none">
            <path d="M83.4759 157.187C138.602 157.187 172.937 129.151 172.937 80.0109C172.937 30.8703 138.602 4.72505 83.4759 4.72505H0V230.898H47.8805V157.187H83.4759ZM83.1609 45.0455C110.251 45.0455 125.371 57.9606 125.371 80.3259C125.371 102.691 110.251 116.866 83.1609 116.866H47.8805V45.0455H83.1609Z" fill="black"/>
            <path d="M307.867 235.623C373.387 235.623 424.103 185.222 424.103 117.496C424.103 49.7705 373.387 0 307.867 0C242.661 0 192.26 49.7705 192.26 117.496C192.26 185.222 242.661 235.623 307.867 235.623ZM307.867 192.782C266.601 192.782 241.401 159.077 241.401 117.496C241.401 75.9158 266.601 42.8405 307.867 42.8405C349.447 42.8405 374.647 75.9158 374.647 117.496C374.647 159.077 349.447 192.782 307.867 192.782Z" fill="black"/>
            <path d="M537.45 230.898C607.696 230.898 652.741 182.387 652.741 116.551C652.741 50.7155 609.271 4.72505 537.45 4.72505H457.124V230.898H537.45ZM505.005 45.9905H534.93C579.975 45.9905 603.601 71.5058 603.601 116.551C603.601 163.487 579.975 189.632 534.93 189.632H505.005V45.9905Z" fill="black"/>
            <path d="M786.165 235.623C845.701 235.623 892.321 196.247 900.196 137.657H849.481C843.81 170.102 818.925 192.782 786.795 192.782C748.049 192.782 721.904 161.912 721.904 117.496C721.904 73.3958 748.049 42.8405 786.795 42.8405C818.925 42.8405 844.125 65.2057 849.481 97.6511H900.196C892.321 39.6904 845.701 0 786.165 0C722.534 0 672.764 51.3456 672.764 117.496C672.764 183.962 722.534 235.623 786.165 235.623Z" fill="black"/>
            <path d="M1072.83 230.898H1124.18L1039.76 4.72505H987.467L902.416 230.898H950.611L967.937 182.387H1055.82L1072.83 230.898ZM1012.35 57.0156L1042.59 144.272H981.482L1012.35 57.0156Z" fill="black"/>
            <path d="M1319.15 160.652C1319.15 127.261 1297.73 108.991 1258.04 101.116L1219.29 93.241C1202.91 90.091 1188.73 83.4759 1188.73 68.0407C1188.73 52.2906 1201.96 39.0604 1225.27 39.0604C1249.22 39.0604 1265.6 55.1256 1267.17 78.7509H1315.68C1312.53 31.5004 1275.36 1.89002 1224.64 1.89002C1175.82 1.89002 1140.22 30.8703 1140.22 71.1908C1140.22 108.676 1166.68 127.261 1201.02 133.876L1238.19 141.122C1257.41 144.902 1268.43 153.407 1268.43 167.582C1268.43 185.852 1251.11 196.562 1226.85 196.562C1197.55 196.562 1181.49 180.497 1180.23 155.612H1131.72C1135.18 203.492 1170.78 234.048 1227.79 234.048C1284.5 234.048 1319.15 203.807 1319.15 160.652Z" fill="black"/>
            <path d="M1448.49 230.898V47.8805H1520V4.72505H1329.42V47.8805H1400.61V230.898H1448.49Z" fill="black"/>
        </svg>
     </div>

        <div id='body ' className='mt-48'>
            <div id='subBody' className='flex border-b border-black pb-12 mb-12 items-center justify-between'>
                <div className='flex gap-16 items-center'>
                    <div className='text-[24px] font-bold'>05</div>
                    <div><img src={img5} alt="" /></div>
                    <p className='2xl:text-[32px] xl:text-[28px] lg:text-[20px] font-bold leading-[120%] 2xl:w-[500px] xl:w-[195px] lg:w-[100px] '>The Problem of today’s cultural development</p>
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
            <div id='subBody' className='flex border-b border-black pb-12 mb-12 items-center justify-between'>
                <div className='flex gap-16 items-center'>
                    <div className='text-[24px] font-bold'>04</div>
                    <div><img src={img4} alt="" /></div>
                    <p className='text-[32px] font-bold leading-[120%] w-[500px]'>The hidden messages of Jack Nielson</p>
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
            <div id='subBody' className='flex border-b border-black pb-12 mb-12 items-center justify-between'>
                <div className='flex gap-16 items-center'>
                    <div className='text-[24px] font-bold'>03</div>
                    <div><img src={img3} alt="" /></div>
                    <p className='text-[32px] font-bold leading-[120%] w-[500px]'>Behind the scenes of the street art culture</p>
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
            <div id='subBody' className='flex border-b border-black pb-12 mb-12 items-center justify-between'>
                <div className='flex gap-16 items-center'>
                    <div className='text-[24px] font-bold'>02</div>
                    <div><img src={img2} alt="" /></div>
                    <p className='text-[32px] font-bold leading-[120%] w-[500px]'>The art of movement</p>
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
            <div id='subBody' className='flex   mb-48 items-center justify-between'>
                <div className='flex gap-16 items-center'>
                    <div className='text-[24px] font-bold'>01</div>
                    <div><img src={img1} alt="" /></div>
                    <p className='text-[32px] font-bold leading-[120%] w-[500px]'>10 artists your should definitely know</p>
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
 </div>
   
  )
}

export default Podcast