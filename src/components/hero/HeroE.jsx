import React, { Component } from 'react'
import Play from './Play.png'
import GreyBox from './GreyBox'

export default class  HeroE   extends Component {
  render() {
    return (
        <div className='whiteBox' style={{backgroundColor:'#E5E5E5'}} >
            <div style={{display:'flex',alignItems:'center',flexDirection:'column',gap:'40px'}} >
                <img src={Play} alt="" />
                <p className='heroEText'>The largest  community of photo enthusiasts</p>
                <button className='butt2'>Join Today</button>

        </div>
      </div>
    )
  }
}
