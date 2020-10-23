import React, { Component } from 'react'


class About extends  Component {

    goto_home=()=>{
        this.props.history.push('/')
    }
    render(){
      return(
        <div>
         <h1> About page</h1>
         <button onClick={this.goto_home}>Home</button>
        </div>
      )
    }
  }
  
  
  export default About;