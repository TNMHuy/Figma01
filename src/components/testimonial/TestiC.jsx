import React, { Component } from 'react'
import img from '../body/Ellipse.png'
export default class TestiC extends Component {
  render() {
    return (
      <div style={{textAlign:'center',display:'flex',flexDirection:'column',alignItems:'center'}}>
        <p style={{lineHeight: '50px',
                   fontSize: '36px',
                   opacity:'0.6',
                   letterSpacing: '-0.54px',
                   paddingTop:'120px',
                   width:'1000px'
                   
         }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
         <img style={{width:'44px',height:'44px',paddingTop:'40px',paddingBottom:'16px'}}  src={img} alt="" />
         <p style={{opacity:'0.6'}}>Nemo enim ipsam</p>
      </div>
    )
  }
}
