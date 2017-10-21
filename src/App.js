import React, { Component } from 'react';
import logo from './images/logo.svg';
import Navi from './navi.js';
import Content from './content.js';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navi></Navi>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          This page is built through JSX
        </p>
        <Content></Content>
      </div>
    );
  }
}

export default App;
