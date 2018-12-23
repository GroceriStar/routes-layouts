import React, {
  Component, Fragment
} from 'react';

// import {
//   Switch,
//   Route
// } from 'react-router-dom';

import {
  // BrowserRouter as Router,
   Route, Link, Switch } from 'react-router-dom';


// import Router from './showcase-router'



import { GroceryRouter, routesee as grocery_routes } from './groceryRouter';

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



import {
  RouterConfigExample,
  RouteWithSubRoutes
} from './TheConfig'


class AppRouter extends Component {
  render() {

    console.log( grocery_routes )


    return (
          <Switch>

            {RouterConfigExample(grocery_routes)}


              <Route component={NotFoundComponent} />


          </Switch>
    );
  }
}



export default AppRouter;
