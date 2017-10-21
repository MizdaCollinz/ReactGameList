import React, { Component } from 'react';
import logo from './images/logo.svg';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          This is written in a javascript file
        </p>
      </div>
    );
  }
}

export default App;
