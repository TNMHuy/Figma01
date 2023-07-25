import React, { Component } from 'react'
import BodyHeader from './BodyHeader'
import SubBody from './SubBody'
import SubBodyB from './SubBodyB'
const content ={
    
            h1:'Sed ut perspiciatis',
            p1:'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.'
        ,
        
            h2:'Lorem ipsum dolor',
            p2:'Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.'
        ,
        
            h3:'Nemo enim ipsam',
            p3:'Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.'
        ,
        
            h4:'Tempor incididunt',
            p4:'Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.'
        ,
    
}
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
