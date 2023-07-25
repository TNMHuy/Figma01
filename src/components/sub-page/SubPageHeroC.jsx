import React, { Component } from 'react'
import WhiteBox from '../hero/WhiteBox'
import GreyBox from '../hero/GreyBox'
import GreySub1 from './GreySub1'

export default class  SubPageHeroC   extends Component {
  render() {
    return (
        <div className='subPageWrap'>
            <GreySub1/>
        <div className='whiteBox' >
        <div >
        <p className='h1'>Learn all about the features of the photo App </p>
        </div>
          </div>
    
         </div>
    )
  }
}
