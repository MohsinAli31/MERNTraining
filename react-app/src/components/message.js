import React, { Component } from 'react'

class message extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        message:"Welcome To React State"
      }
    }
    thanskMessge=()=>{
        this.setState({
            message:'Thanks You'
        })
    }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.thanskMessge}>Subscribe</button>
      </div>
    )
  }
}

export default message