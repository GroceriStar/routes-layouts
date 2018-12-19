import React, {
  Component, Fragment
} from 'react';
import {
  Switch, Route
} from 'react-router-dom';

import {
  HomeView,
  // GroceriesView,
  GroceryView,
  // ManageGroceryView,
  // DesignedGroceryView
} from './views';

import NotFoundComponent from './components/NotFoundComponent'

class DPRouter extends Component {
  render() {
    return (
          <Fragment>

          <Switch>
            <Route path="/" exact component={HomeView} />







            <Route path="/grocery/:id/:departmentId/:status"  component={GroceryView} />
            <Route path="/grocery/:id/:departmentId/all"  component={GroceryView} />
            <Route path="/grocery/:id/:departmentId/purchased"  component={GroceryView} />
            <Route path="/grocery/:id/:departmentId/the-third-key"  component={GroceryView} />
            <Route path="/grocery/:id/:departmentId"  component={GroceryView} />





          </Switch>



          </Fragment>
    );
  }
}
export default DPRouter;
