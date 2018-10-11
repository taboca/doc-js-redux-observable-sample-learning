import React, { Component } from 'react';
import logo from './logo.svg';
import MyComponentButton from './containers/MyComponentButton'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <MyComponentButton />
      </div>
    );
  }
}

export default App;
