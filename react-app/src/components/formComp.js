import React, { Component } from 'react'

class formComp extends Component {
    constructor(props) {
        console.log("constructor")
      super(props)
    
      this.state = {
         name:"",
         roll:"",
         city:"",
         uni:""
      }
    }
    handleCHange=(event)=>{
        
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    handleSUbmit=(event)=>{
        console.log(this.state)
        event.preventDefault();
    }
  render() {
    console.log("render")
    return (
        <div>
            <form onSubmit={this.handleSUbmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name"  value={this.state.name} onChange={this.handleCHange}></input>
                </div>
                <div>
                    <label>Roll No :</label>
                    <input type="text" name="roll"  value={this.state.roll} onChange={this.handleCHange}></input>
                </div>
                <div>
                    <label>University:</label>
                    <input type="text" name="uni"  value={this.state.uni} onChange={this.handleCHange}></input>
                </div>
                <div>
                    <label>City :</label>
                    <input type="text" name="city"  value={this.state.city} onChange={this.handleCHange}></input>
                </div>
                <div>
                    <button type="submit" name="submit"  value="Submit">Submit</button>
                </div>
            </form>
        </div>
    )
  }
}

export default formComp;