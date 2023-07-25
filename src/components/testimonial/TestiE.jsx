import React, { Component } from 'react'
import img from '../body/Ellipse.png'
import img2 from '../body/Rectangle.png'
export default class TestiE extends Component {
  render() {
    return (
        <div style={{display:'flex'}}>
            <div style={{display:'flex',flexDirection:'column',width:'74%',paddingLeft:'80px'}}>
            <p style={{lineHeight: '50px',
                   fontSize: '36px',
                   opacity:'0.6',
                   letterSpacing: '-0.54px',
                   paddingTop:'120px',
                   width:'1000px'
                   
         }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
         <div style={{display:'flex',alignItems:'center',gap:'20px',paddingTop:'40px'}}>
         <img style={{width:'44px',height:'44px'}}  src={img} alt="" />
         <p style={{opacity:'0.6'}}>Nemo enim ipsam</p>

         </div>
      </div>

         <div >
            <img style={{width:'509px',height:'470px'}} src={img2} alt="" />
         </div>
        </div>
      
    )
  }
}
