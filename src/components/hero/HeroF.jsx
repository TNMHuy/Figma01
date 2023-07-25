import React, { Component } from 'react'
import WhiteBox from './WhiteBox'
import GreyBox from './GreyBox'
import Play from './Play.png'

export default class  HeroF   extends Component {
  render() {
    return (
      <div className='heroWrap'>
        <WhiteBox/>
        <GreyBox Play={Play}/>
        
     </div>
    )
  }
}
