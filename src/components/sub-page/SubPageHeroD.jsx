import React, { Component } from 'react'
import WhiteBox from '../hero/WhiteBox'
import GreyBox from '../hero/GreyBox'
import GreySub1 from './GreySub1'
import Play from '../hero/Play.png'

export default class  SubPageHeroD   extends Component {
  render() {
    return (
      <div className='subPageWrap'>
        <div className='whiteBox' >
        <div >
        <p className='h1'>Learn all about the features of the photo App </p>
        </div>
      </div>
        <GreySub1 Play={Play}/>

     </div>
    )
  }
}
