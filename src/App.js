import React, { Component } from 'react'
import MasterHog from './MasterHog'
import './App.css'

class App extends Component {
  
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <MasterHog name="test" value="7"/>
      </div>
    )
  }

}

export default App