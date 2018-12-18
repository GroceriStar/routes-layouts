import React, { Component, Fragment } from 'react';
import './App.css';
//
// import Header from './components/Header';


// import Router from './routes/showcase-router';

import GRRouter from './router-showcase-fragment';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Sep = () => <span> | </span>;

const Header = () => {
  return (
    <div>
      <Link to="/">Home</Link> <Sep />
      <Link to="/grocery/3">view grocery</Link> <Sep />
      <Link to="/design/grocery/3">designed grocery page</Link> <Sep />
      <Link to="/groceries">all groceries</Link>
      <Link to="/manage/grocery/3">manage grocery</Link> <Sep />
      <hr/>
    </div>
  )
}


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

                      <Route path="/" exact component={HomeView} />

                      <Route path="/grocery/:id"  component={GroceryView} />

                      <Route path="/design/grocery/:id"  component={DesignedGroceryView} />

                      <Route path="/groceries"  component={GroceriesView} />

                      <Route path="/manage/grocery/:id"  component={ManageGroceryView} />



                    </div>
          </div>
        </Router>

      </Fragment>
    );
  }
}

export default App;
