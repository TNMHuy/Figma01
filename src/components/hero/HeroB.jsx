import React, { Component } from 'react'
import WhiteBox from './WhiteBox'
import GreyBox from './GreyBox'

export default class  HeroB   extends Component {
  render() {
    return (
      <div className='heroWrap'>
        <GreyBox/>
        <WhiteBox/>

     </div>
    )
  }
}
