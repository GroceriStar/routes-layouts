import React, { Component, Fragment } from 'react';


import './App.css';





import  Header from './components/Header';


import AppRouter from './routes';


import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';



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


                <AppRouter />


            </div>
          </div>
        </Router>

      </Fragment>
    );
  }
}

export default App;
