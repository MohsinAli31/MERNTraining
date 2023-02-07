import React, { Component } from 'react'
import ChildComp from './childComp'

class parentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName:'Parent'
      }
    }
    greetParent = (child)=>{
           alert(`hello ${this.state.parentName} method called from ${child}`) 
    }
  render() {
    return (
      <div><ChildComp parentEvent={this.greetParent}/></div>
    )
  }
}

export default parentComp
