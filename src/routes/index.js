import React, {
  Component
} from 'react';

// import {
//   Switch,
//   Route
// } from 'react-router-dom';

import {
  // BrowserRouter as Router,
   Route, Switch } from 'react-router-dom';


// import Router from './showcase-router'



import { routesee as grocery_routes } from './groceryRouter';




import  {  routesse as department_routes } from './departmentRouter'


import {
  HomeView



} from '../views';


// import IngredientsRouter from ''

// import FavoritesRouter from ''

// import PurchasedRouter from ''


// Later this router will be used as App router that will connect nested routes, from sub-components
// https://medium.com/iqube-bits/a-modular-approach-to-routing-with-react-router-4-d4a3db9f56ae

import NotFoundComponent from '../components/NotFoundComponent'


// @TODO replace with a separated functions from separate route config functions
// main goal is to separate functions
import {
  RouterConfigExample
  , renderRoutes
  // ,
  // RouteWithSubRoutes
} from './TheConfig'



class AppRouter extends Component {
  render() {

    console.log( grocery_routes )
    console.log( department_routes )


    return (
          <Switch>
            <Route path="/" exact component={HomeView} />

            {/*renderRoutes(routes1)*/}

            {/*renderRoutes(routes2)*/}




            <Route component={NotFoundComponent} />


          </Switch>
    );
  }
}



export default AppRouter;
