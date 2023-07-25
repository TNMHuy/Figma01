import React, { Component } from 'react'

export default class SubTesti extends Component {
  render() {
    return (
      <div style={{textAlign:'center',display:'flex',flexDirection:'column',alignItems:'center'}}>
          <div style={{
                   height: '144px',
                   fontFamily: 'Montserrat',
                   fontSize: '48px',
                   fontStyle: 'normal',
                   fontWeight: '400',
                   lineHeight: '72px', 
                   letterSpacing: '-0.72px',
                   paddingLeft:'80px',
                   paddingTop:'120px',
                   
        }}>
        <p >You’re in good company </p>
        <p style={{lineHeight: '50px',
                   fontSize: '36px',
                   opacity:'0.6',
                   letterSpacing: '-0.54px',
                   paddingTop:'30px',
                   width:'1000px'
                   
         }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
      </div>
      </div>
    )
  }
}
