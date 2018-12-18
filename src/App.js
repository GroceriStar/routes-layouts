import React, { Component, Fragment } from 'react';


import './App.css';
//
import Header from './components/Header';


// import Router from './routes/showcase-router';

import GRRouter from './router-showcase-fragment';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';



// const { match } = this.props
//
// console.log(match.path)
// console.log(match.url)

class App extends Component {
  
  render() {
    return (
      <Fragment>



        <Router>
          <div className="App">
            <div>


                <Header />
                <GRRouter />


            </div>
          </div>
        </Router>

      </Fragment>
    );
  }
}

export default App;
