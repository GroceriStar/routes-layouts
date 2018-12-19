import React, { Component, Fragment } from 'react';


import './App.css';
//
import Header from './components/Header';


// import Router from './routes/showcase-router';

// import GRRouter from './router-showcase-fragment';

import AppRouter from './routes';

 // import GroceryRouter from './routes/groceryRouter';


import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';



// const { match } = this.props
//
// console.log(match.path)
// console.log(match.url)
// <Switch>
//   <GroceryRouter />
// </Switch>

class App extends Component {

  render() {
    return (
      <Fragment>



        <Router>
          <div className="App">
            <div>


                <Header />


                <AppRouter />


            </div>
          </div>
        </Router>

      </Fragment>
    );
  }
}

export default App;
