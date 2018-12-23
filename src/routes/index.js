import React, {
  Component
} from 'react';

// import {
//   Switch,
//   Route
// } from 'react-router-dom';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


// import Router from './showcase-router'



import { GroceryRouter, routesee } from './groceryRouter';

import {
  HomeView,
  GroceriesView,
  GroceryView,
  ManageGroceryView,
  DesignedGroceryView


} from '../views';



import DepartmentRouter from './departmentRouter'

import {
  DepartmentsView,
  DepartmentView,
  ManageDepartmentsView,
  ManageDepartmentView
} from '../views';


// import IngredientsRouter from ''

// import FavoritesRouter from ''

// import PurchasedRouter from ''


// Later this router will be used as App router that will connect nested routes, from sub-components
// https://medium.com/iqube-bits/a-modular-approach-to-routing-with-react-router-4-d4a3db9f56ae

import NotFoundComponent from '../components/NotFoundComponent'




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




class AppRouter extends Component {
  render() {

    console.log( routesee )


    return (
          <Switch>

            <Route path="/" exact component={HomeView} />


            <Route path="/grocery/:id"  component={GroceryView} />

            <Route path="/design/grocery/:id"  component={DesignedGroceryView} />


            <Route path="/groceries"  component={GroceriesView} />

            <Route path="/manage/grocery/:id"  component={ManageGroceryView} />




            {/*full, print, clone*/}
            <Route path="/grocery/:id/:status"  component={GroceryView} />







              <Route component={NotFoundComponent} />


          </Switch>
    );
  }
}



export default AppRouter;
