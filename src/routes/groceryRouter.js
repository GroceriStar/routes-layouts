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
  DesignedGroceryView,
  PrintGroceryView,
  FullGroceryView,
  CloneGroceryView

} from '../views';

import _ from 'lodash'
// import rouTE from 'route'

const routes = [

  {
    path: "/groceries",
    component: GroceriesView
  },
  {
    path: "/grocery/:id",
    component: GroceryView,

  },


  {
    path: "/full/grocery/:id",
    component: FullGroceryView
  },
  {
    path: "/print/grocery/:id",
    component: PrintGroceryView
  },
  {
    path: "/clone/grocery/:id",
    component: CloneGroceryView
  },




  {
    path: "/design/grocery/:id",
    component: DesignedGroceryView
  },
  {
    path: "/manage/grocery/:id",
    component: ManageGroceryView
  }

];


class GroceryRouter extends Component {
  render() {
    return (
      <Fragment>


          { _.map(routes, (route, key) => {

            const { component, path } = route;

            return (
              <Route
                exact
                key={key}
                path={path}
                component={component}
              />
            );

          })}



      </Fragment>
    );
  }
}
export {
  GroceryRouter,
  routes
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
