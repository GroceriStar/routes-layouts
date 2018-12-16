import React, { Component, Fragment } from 'react';
import './App.css';
//
// import Header from './components/Header';
import Router from './routes/showcase-router';

class App extends Component {
  render() {
    return (
      <Fragment>

        <Router />
      </Fragment>
    );
  }
}

export default App;
