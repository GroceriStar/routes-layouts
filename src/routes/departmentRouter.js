import React, {
  Component, Fragment
} from 'react';
import {
   Route
} from 'react-router-dom';

import {
  DepartmentsView,
  DepartmentView,
  ManageDepartmentsView,
  ManageDepartmentView
} from '../views';

// import rouTE from 'route'

const routesse = [
  {
    path: "/departments",
    component: DepartmentsView
  },
  // {
  //   path: "/groceries",
  //   component: GroceriesView
  // },
  {
    path: "/department/:id/:groceryId",
    component: DepartmentView,
    routes: [
      {
        path: "/department/:id/:groceryId/:status",
        component: DepartmentView
      },
      // {
      //   path: "/grocery/:id/manage",
      //   component: ManageGroceryView
      // },
      // {
      //   path: "/grocery/:id/:status",
      //   component: GroceryView
      // },
    ]
  },

  // {
  //   path: "/department/:id/:groceryId/:status",
  //   component: DepartmentView
  // },


];



class DepartmentRouter extends Component {
  render() {
    return (
      
      <Fragment>


        <Route path="/departments" exact component={DepartmentsView} />


        {/* status: all, purchased, the-third-key and without status option */}
        <Route path="/department/:id/:groceryId/:status"  component={DepartmentView} />
        <Route path="/department/:id/:groceryId"  component={DepartmentView} />








      </Fragment>
    );
  }
}
// export default DepartmentRouter;

export {
  DepartmentRouter,
  routesse //@TODO bad name
}
