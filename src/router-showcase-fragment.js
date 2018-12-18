import React, {
  Component, Fragment
} from 'react';
import {
  Switch, Route
} from 'react-router-dom';

import {
  HomeView,
  GroceriesView,
  GroceryView,
  ManageGroceryView,
  DesignedGroceryView
} from './views';

import NotFoundComponent from './components/NotFoundComponent'

class GRRouter extends Component {
  render() {
    return (
          <Fragment>

          <Switch>
          <Route path="/" exact component={HomeView} />

          <Route path="/grocery/:id"  component={GroceryView} />

          <Route path="/design/grocery/:id"  component={DesignedGroceryView} />

          <Route path="/groceries"  component={GroceriesView} />

          <Route path="/manage/grocery/:id"  component={ManageGroceryView} />

          <Route component={NotFoundComponent}></Route>

          </Switch>



          </Fragment>
    );
  }
}
export default GRRouter;
