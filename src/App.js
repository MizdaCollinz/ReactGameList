import React, { Component } from 'react';
import logo from './images/logo.svg';
import Content from './content.js';
import Footer from './footer.js';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p style={textStyle} className="App-intro">
          This page is built through JSX
        </p>
        <Content></Content>
        <Footer></Footer>
      </div>
    );
  }
}

var textStyle = {
  padding: '20px 0px',
  fontWeight: 'bold'
}

export default App;
