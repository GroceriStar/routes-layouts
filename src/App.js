import React, { Component, Fragment } from 'react';
import './App.css';
//
import Header from './components/Header';


// import Router from './routes/showcase-router';

import GRRouter from './router-showcase-fragment';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// const Sep = () => <span> | </span>;
//



const HomeView = ({ routes }) => (
  <div>
  HomeView

  {/*}<RouterConfigExample {...routes} />*/}

  </div>
)




// const { match } = this.props
//
// console.log(match.path)
// console.log(match.url)

const GroceriesView = ({ match }) => (
  <div>
    GroceriesView - {match.url}
  </div>
)

const GroceryView = ({ match }) => (
  <div>
    GroceryView - {match.url}
  </div>
)

const ManageGroceryView = ({ match }) => (
  <div>
    ManageGroceryView - {match.url}
  </div>
)

const DesignedGroceryView = ({ match }) => (
  <div>
  DesignedGroceryView - {match.url}
  </div>
)

class App extends Component {
  render() {
    return (
      <Fragment>

        { /*}<Router /> */}

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
