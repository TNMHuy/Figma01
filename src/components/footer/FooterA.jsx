import React, { Component } from 'react'
import Logo from '../navigation/Logo'
import img from '../body/Ellipse.png'
export default class FooterA extends Component {
  render() {
    return (
      <div style={{padding:'120px 80px'}}>
        <div style={{display:'flex',}}>
        <div style={{width:'50%'}}>
        <Logo/>
        </div>
        
        <div style={{width:'50%', display:'flex',gap:'100px'}}>
            <ul style={{listStyle:'none'}}>
                <li  style={{paddingBottom:'15px',
                             fontWeight:'700'}}>
                                Mobile app
                                </li>
                <li>Feature</li>
                <li>Live share</li>
                <li>Video record</li>
            </ul>
            <ul style={{listStyle:'none'}}>
                <li  style={{paddingBottom:'15px',
                             fontWeight:'700'}}>
                                Community
                                </li>
                <li>Featured artists</li>
                <li>The Portal</li>
                <li>Live events</li>
            </ul>
            <ul style={{listStyle:'none'}}>
                <li  style={{paddingBottom:'15px',
                             fontWeight:'700'}}>
                                Company
                                </li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>History</li>
            </ul>
            <div style={{display:'flex',flexDirection:'column',gap:'16px'}}>
                <button className='butt2'>Register</button>
                <button className='butt1'>Log in</button>
            </div>
            
        </div>
        </div>
        <div style={{height:'1px',background:'black',marginTop:'60px',marginBottom:'40px'}}></div>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
            <div>© Photo, Inc. 2019. We love our users!</div>
            <div style={{alignItems:'center',display:'flex',gap:'20px'}}>Follow us:
                <img style={{height:'44px',width:'44px'}} src={img} alt="" />
                <img style={{height:'44px',width:'44px'}} src={img} alt="" />
                <img style={{height:'44px',width:'44px'}} src={img} alt="" />
                <img style={{height:'44px',width:'44px'}} src={img} alt="" />
               
            </div>
        </div>
      </div>
    )
  }
}
