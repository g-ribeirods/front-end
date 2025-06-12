import React, { Component } from 'react'

export default class Cart extends Component {
    constructor(){
        super();
        this.state ={
            first_name: "Mbape"
        } 
    }

    change_name = () =>{
      this.setState({first_name : "Andrews"});

    }
  render() {
    return (
      <>
        <div>Oiiii, {this.state.first_name}</div>
        <button onClick={this.change_name}>Change name</button>
      </>
    )
  }
}
