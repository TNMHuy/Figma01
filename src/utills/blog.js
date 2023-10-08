import axios from "axios";
import au1 from '../assets/jack-finnigan-rriAI0nhcbc-unsplash 1.png'
import au2 from '../assets/bekah-allmark-Qt0ogPnhGWY-unsplash 1.png'
import au3 from '../assets/olena-sergienko-0TSd6uCKTKc-unsplash 1.png'
import au4 from '../assets/metin-ozer-iSmTwuKTNDo-unsplash 1.png'
import au5 from '../assets/jeffery-erhunse-vp9mRauo68c-unsplash 1.png'
import au6 from '../assets/emiliano-vittoriosi-fIM5oAdHAxE-unsplash 1.png'
import img5 from '../assets/podcast/5.png'
import img4 from '../assets/podcast/4.png'
import img3 from '../assets/podcast/3.png'
import img2 from '../assets/podcast/2.png'
import img1 from '../assets/podcast/1.png'
export const getPostApi = axios.create({
  baseURL:'https://api.hoangquanit.com/wp-json/wp/v2/posts'
})
export const getPostApiId = axios.create({
  baseURL:'https://api.hoangquanit.com/wp-json/wp/v2/posts'
})
  
export const getFormattedDate = (theDate='', locales= 'vi-VN') =>{
  const options ={ year:'numeric', month :'short', day:'numeric'};
  return new Date(theDate).toLocaleDateString(locales,options);
}

export const scroll = () =>{
  window.scrollY(0)
}
export const podcastList = [
  {
    img: img5,
    number: '05',
    p:'The Problem of today’s cultural development',
  },
  {
    img: img4,
    number: '04',
    p:'The hidden messages of Jack Nielson',
  },
  {
    img: img3,
    number: '03',
    p:'Behind the scenes of the street art culture',
  },
  {
    img: img2,
    number: '02',
    p:'The art of movement',
  },
  {
    img: img1,
    number: '01',
    p:'10 artists your should definitely know',
  },
]
export const authorsList = [
  {
    name : 'Jakob Grønberg',
    job : ' Artist',
    city : 'Berlin',
    img : au1
  },
  {
    name : 'Louise Jensen',
    job : ' Artist',
    city : 'Stockholm',
    img : au2

  },
  {
    name : 'Anne Henry',
    job : ' Photograph',
    city : 'New York',
    img : au3

  },
  {
    name : 'Anna Nielsen',
    job : ' Columnists',
    city : 'Copenhagen',
    img : au4

  },
  {
    name : 'Jane Cooper',
    job : ' Artist',
    city : 'Berlin',
    img : au5

  },
  {
    name : 'Cristofer Vaccaro',
    job : ' Artist',
    city : 'Lisbon',
    img : au6

  },

]