import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


const HomeView = ({ match }) => (
  <div>
  HomeView
  </div>
)

const GroceriesView = ({ match }) => (
  <div>
    GroceriesView
  </div>
)

const GroceryView = ({ match }) => (
  <div>
    GroceryView
  </div>
)

const ManageGroceryView = ({ match }) => (
  <div>
    ManageGroceryView
  </div>
)

const DesignedGroceryView = ({ match }) => (
  <div>
  DesignedGroceryView
  </div>
)


class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>

          <Route path="/" exact component={HomeView} />
          {/*}
          <Route path="/grocery/:id" component={GroceryView} />

          <Route path="/design/grocery/:id" component={DesignedGroceryView} />

          <Route path="/groceries" component={GroceriesView} />

          <Route path="/manage/grocery/:id" component={ManageGroceryView} />
          */}

        </Switch>
      </BrowserRouter>
    )
  }
}

export default Router;
