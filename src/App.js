import React, { Component } from 'react';
import logo from './logo.svg';
import MyComponentButton from './containers/MyComponentButton'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <MyComponentButton />
        </header>
      </div>
    );
  }
}

export default App;
