import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import Header from '../components/Header';

import routes from './config/showcase';

const Sep = () => <span> | </span>;

const Header = () => {
  return (
    <div>
      <Link to="/">Home</Link> <Sep />
      <Link to="/grocery/:id">Catalog</Link> <Sep />
      <Link to="/design/grocery/:id">Another</Link> <Sep />
      <Link to="/groceries">Nested</Link>
      <Link to="/manage/grocery/:id">Nested</Link>
      <hr/>
    </div>
  )
}


const HomeView = ({ routes }) => (
  <div>
  HomeView

  <RouterConfigExample {...routes} />

  </div>
)


const RouterConfigExample = (routes) => {

  return (
    <Fragment>
    {routes &&
      routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))
    }
    </Fragment>
  );
}

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}
// const { match } = this.props
//
// console.log(match.path)
// console.log(match.url)

const GroceriesView = ({ match }) => (
  <div>
    GroceriesView - ${match.url}
  </div>
)

const GroceryView = ({ match }) => (
  <div>
    GroceryView - ${match.url}
  </div>
)

const ManageGroceryView = ({ match }) => (
  <div>
    ManageGroceryView - ${match.url}
  </div>
)

const DesignedGroceryView = ({ match }) => (
  <div>
  DesignedGroceryView - ${match.url}
  </div>
)

// const Tacos = ({ match }) => (
//   // here's a nested div
//   <div>
//     {/* here's a nested Route,
//         match.url helps us make a relative path */}
//     <Route path={match.url + "/carnitas"} component={Carnitas} />
//   </div>
// );

class Router extends Component {
  render(){
    return (
      <Fragment>

      <Header />




      <BrowserRouter>
        <Switch>

          <Route path="/" exact component={HomeView} />

          <Route path="/grocery/:id" component={GroceryView} />

          <Route path="/design/grocery/:id" component={DesignedGroceryView} />

          <Route path="/groceries" component={GroceriesView} />

          <Route path="/manage/grocery/:id" component={ManageGroceryView} />

        </Switch>
      </BrowserRouter>
      </Fragment>
    )
  }
}

export default Router;
