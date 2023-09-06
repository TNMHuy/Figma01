import React, { Component } from 'react'
import BodyHeader from './BodyHeader'
import SubBody from './SubBody'
import { content } from '../../data'
// import * as data from '../../data'


export default class BodyA extends Component {
   dataChosen= (data,filter) =>{
      return filter===undefined?data: data.filter(item=>item.choose ===filter)
  }

   content = this.dataChosen(content,false)
  render() {
    // console.log(this.bodyD);
    // this.dataChosen(content)

    return (
      <div className='bodyWrap'>
        <BodyHeader/>
        <div className='subWrap'>
            {
              this.content.map((item,index)=>{
                return <SubBody h={item.h1} p={item.p1} key ={index}/>
              })
            }
             {/* <SubBody h={this.bodyD[0].h1} p={this.bodyD[0].p1}/> */}
             {/* <SubBody h={this.bodyD[1].h1} p={this.bodyD[1].p1}/> */}
             {/* <SubBody h={bodyD[2].h1} p={bodyD[2].p1}/> */}
             {/* <SubBody h={bodyD[3].h1} p={bodyD[3].p1}/> */}
             
             
        </div>
        
      </div>
    )
  }
}
