import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Router from './routes/showcase-router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router />
      </div>
    );
  }
}

export default App;
