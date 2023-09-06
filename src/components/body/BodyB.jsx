import React, { Component } from 'react'
import BodyHeader from './BodyHeader'
import SubBody from './SubBody'
import SubBodyB from './SubBodyB'
import { content } from '../../data'

export default class BodyB extends Component {
  render() {
    
    return (
      <div className='bodyWrap'>
        <BodyHeader/>
        <div className='subWrap'>
             <SubBodyB h={content.h1} p={content.p1}/>
             <SubBodyB h={content.h2} p={content.p2}/>
             <SubBodyB h={content.h3} p={content.p3}/>
             <SubBodyB h={content.h4} p={content.p4}/>
             
        </div>
        
      </div>
    )
  }
}
