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


const routesee = [
  {
    path: "/",
    component: HomeView
  },
  {
    path: "/groceries",
    component: GroceriesView
  },
  {
    path: "/grocery/:id",
    component: GroceryView,
    routes: [
      {
        path: "/grocery/:id/design",
        component: DesignedGroceryView
      },
      {
        path: "/grocery/:id/manage",
        component: ManageGroceryView
      },
      {
        path: "/grocery/:id/:status",
        component: GroceryView
      },
    ]
  },

  // {
  //   path: "/design/grocery/:id",
  //   component: DesignedGroceryView
  // },
  // {
  //   path: "/manage/grocery/:id",
  //   component: ManageGroceryView
  // },
  // {
  //   path: "/grocery/:id/:status",
  //   component: GroceryView
  // },


];


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
export {
  GroceryRouter,
  routesee //@TODO bad name
}
  ;
// export default GroceryRouter;



            //
            // <Route path="/grocery/:id/:departmentId/:status"  component={GroceryView} />
            // <Route path="/grocery/:id/:departmentId/all"  component={GroceryView} />
            // <Route path="/grocery/:id/:departmentId/purchased"  component={GroceryView} />
            // <Route path="/grocery/:id/:departmentId/the-third-key"  component={GroceryView} />
            // <Route path="/grocery/:id/:departmentId"  component={GroceryView} />
            //
            //
