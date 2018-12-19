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


} from '../views';



class GroceryRouter extends Component {
  render() {
    return (
          <Fragment>

            <Route path="/" exact component={HomeView} />


            <Route path="/grocery/:id"  component={GroceryView} />

            <Route path="/design/grocery/:id"  component={DesignedGroceryView} />


            <Route path="/groceries"  component={GroceriesView} />

            <Route path="/manage/grocery/:id"  component={ManageGroceryView} />




            {/*full, print, clone*/}
            <Route path="/grocery/:id/:status"  component={GroceryView} />





          </Fragment>
    );
  }
}
export default GroceryRouter;



            //
            // <Route path="/grocery/:id/:departmentId/:status"  component={GroceryView} />
            // <Route path="/grocery/:id/:departmentId/all"  component={GroceryView} />
            // <Route path="/grocery/:id/:departmentId/purchased"  component={GroceryView} />
            // <Route path="/grocery/:id/:departmentId/the-third-key"  component={GroceryView} />
            // <Route path="/grocery/:id/:departmentId"  component={GroceryView} />
            //
            //
