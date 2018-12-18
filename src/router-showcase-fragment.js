import React, {
  Component, Fragment
} from 'react';
import {
  Route
} from 'react-router-dom';

import {
  HomeView,
  GroceriesView,
  GroceryView,
  ManageGroceryView,
  DesignedGroceryView
} from './views';

class GRRouter extends Component {
  render() {
    return (
          <Fragment>

          <Route path="/" exact component={HomeView} />

          <Route path="/grocery/:id"  component={GroceryView} />

          <Route path="/design/grocery/:id"  component={DesignedGroceryView} />

          <Route path="/groceries"  component={GroceriesView} />

          <Route path="/manage/grocery/:id"  component={ManageGroceryView} />




          </Fragment>
    );
  }
}
export default GRRouter;
