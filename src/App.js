import React, { Component } from 'react';
import './App.css';
import Screeners from './components/Screeners.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        <h2>Cryptocurrency Screeners</h2>
        </div>

        <Screeners/>

      </div>
    );
  }
}

export default App;
