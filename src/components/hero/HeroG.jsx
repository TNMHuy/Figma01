import React, { Component } from 'react'
import WhiteBox from './WhiteBox'
import GreyBox from './GreyBox'
import Play from './Play.png'

export default class  HeroG   extends Component {
  render() {
    return (
        <div className='whiteBox' style={{backgroundColor:'#E5E5E5'}} >
            <div style={{display:'flex',gap:'40px',flexDirection:'column',justifyContent:'center',alignItems:'flex-start'}} >
                <p className='h1'>The largest  community of photo enthusiasts</p>
                <button className='butt2'>Join Today</button>
                <img src={Play} alt="" />
        </div>
      </div>
    )
  }
}
