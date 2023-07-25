import React, { Component } from 'react'
import WhiteBox from './WhiteBox'
import GreyBox from './GreyBox'

export default class  HeroA   extends Component {
  render() {
    return (
      <div className='heroWrap'>
        <WhiteBox/>
        <GreyBox/>

     </div>
    )
  }
}
