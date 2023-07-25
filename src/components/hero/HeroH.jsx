import React, { Component } from 'react'
import WhiteBox from './WhiteBox'
import GreyBox from './GreyBox'
import SignUpForm from '../sign up/SignUpForm'

export default class  HeroH   extends Component {
  render() {
    return (
        <div className='whiteBox'  >
            <div >
                <p className='h1'>The largest  community of photo enthusiasts</p>
        </div>
          <SignUpForm/>
      
      </div>
    )
  }
}
