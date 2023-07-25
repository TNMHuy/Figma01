import React, { Component } from 'react'

export default class HeaderJ extends Component {
  render() {
    return (
      <div style={{textAlign:'center',display:'flex',flexDirection:'column',alignItems:'center'}}>
          <div style={{width: 'px',
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
        <p >Snap photos and share like never before </p>
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
