import React, { Component } from 'react'
import WhiteBox from './WhiteBox'
import GreyBox from './GreyBox'

export default class  HeroD   extends Component {
  render() {
    return (
        <div className='whiteBox' style={{backgroundColor:'#E5E5E5'}} >
            <div >
                <p className='h1'>The largest  community of photo enthusiasts</p>
                <button className='butt2'>Join Today</button>

        </div>
      </div>
    )
  }
}
