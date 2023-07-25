import React, { Component } from 'react'
import Logo from '../navigation/Logo'
import img from '../body/Ellipse.png'
export default class FooterC extends Component {
  render() {
    return (
        <div style={{padding:'120px 80px',}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
       
       <div style={{display:'flex',gap:'100px'}}>
           <p style={{fontWeight:'700'}}>Mobile</p>
           <p style={{fontWeight:'700'}}>Community</p>
           <p style={{fontWeight:'700'}}>Company</p>
       </div>

       <div>
           <Logo/>
       </div>
       <div style={{display:'flex',gap:'100px'}}>
           <p style={{fontWeight:'700'}}>Help Desk</p>
           <p style={{fontWeight:'700'}}>Blog</p>
           <p style={{fontWeight:'700'}}>Resources</p>
       </div>
     </div>
        <div style={{height:'1px',background:'black',marginTop:'60px',marginBottom:'40px'}}></div>
        <div style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',gap:'40px'}}>
        <div style={{alignItems:'center',display:'flex',gap:'20px'}}>
                <img style={{height:'44px',width:'44px'}} src={img} alt="" />
                <img style={{height:'44px',width:'44px'}} src={img} alt="" />
                <img style={{height:'44px',width:'44px'}} src={img} alt="" />
                <img style={{height:'44px',width:'44px'}} src={img} alt="" />
               
            </div>
            <p>© Photo, Inc. 2019. We love our users!</p>
        </div>
        </div>
      
    )
  }
}
