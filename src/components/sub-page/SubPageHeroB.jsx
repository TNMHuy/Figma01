import React, { Component } from 'react'
import WhiteBox from '../hero/WhiteBox'
import GreyBox from '../hero/GreyBox'
import GreySub1 from './GreySub1'
import GreySub2 from './GreySub2'

export default class  SubPageHeroB   extends Component {
  render() {
    return (
      <div className='subPageWrap' style={{display:'block'}}>
        <div className='' style={{justifyContent:'flex-start',padding:'80px'}}>
        <div >
        <p className='subPageP'>Learn all about the features of the photo App </p>
        </div>
      </div>
        <GreySub2/>

     </div>
    )
  }
}
