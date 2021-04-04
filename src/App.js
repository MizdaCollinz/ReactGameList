import React, { Component } from 'react';
import Content from './content.js';
import Footer from './footer.js';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">MyGameList</h1>
        </header>
        <Content/>
        <Footer/>
      </div>
    );
  }
}

export default App;
