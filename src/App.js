import React, { Component, Fragment } from 'react';
import './App.css';
//
// import Header from './components/Header';


// import Router from './routes/showcase-router';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

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


class App extends Component {
  render() {
    return (
      <Fragment>

        { /*}<Router /> */}

        <Router>
          <div className="App">
          <div>
                      <Route exact path="/" component={Home} />
                      <Route exact path="/about" component={About} />
                      <Route exact path="/code" component={Code} />
                      <Route exact path="/contact" component={Contact} />
                      <Route exact path="/presence" component={info} />
                    </div>
          </div>
        </Router>

      </Fragment>
    );
  }
}

export default App;
