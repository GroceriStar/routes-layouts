import React, {
  Component
} from 'react';



import {
  // BrowserRouter as Router,
   Route, Switch } from 'react-router-dom';


import grocery_routes     from './groceryRouter';
import department_routes  from './departmentRouter'

// import IngredientsRouter from ''

import shopping_routes from './shoppingRouter'

import favorite_routes from './favoriteRouter'

import purchased_routes from './purchasedRouter'


import {
  HomeView,
  LoginView,
  ProtectedView



} from '../views';





// Later this router will be used as App router that will connect nested routes, from sub-components
// https://medium.com/iqube-bits/a-modular-approach-to-routing-with-react-router-4-d4a3db9f56ae

import NotFoundComponent from '../components/NotFoundComponent'


import _ from 'lodash';


class AppRouter extends Component {
  render() {

    // console.log( grocery_routes )
    // console.log( department_routes )


    return (
      <Switch>

        <Route path="/" exact component={HomeView} />


        { _.map(grocery_routes, (route, key) => {

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



        { _.map(department_routes, (route, key) => {

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




        <Route component={NotFoundComponent} />

        <Route path="/login" component={LoginView} />
        <Route path="/protected" component={ProtectedView} />


      </Switch>
    );
  }
}



export default AppRouter;
