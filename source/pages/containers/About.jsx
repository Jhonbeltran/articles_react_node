import React, {Component} from 'react'
import {Link} from 'react-router'

class About extends Component {
  render(){
    return (
      <section name="about">
        <h1>About</h1>
        <Link to="/Home">Go to Home</Link>
        <Link to="/random">Go to random</Link>
      </section>
    )
  }
}

export default About
