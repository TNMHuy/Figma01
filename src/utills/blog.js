import axios from "axios";

export const getPostApi = axios.create({
  baseURL:'https://api.hoangquanit.com/wp-json/wp/v2/posts'
})
  
export const getFormattedDate = (theDate='', locales= 'vi-VN') =>{
  const options ={ year:'numeric', month :'short', day:'numeric'};
  return new Date(theDate).toLocaleDateString(locales,options);
}

export const scroll = () =>{
  window.scrollY(0)
}