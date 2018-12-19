import React, {
  Component
} from 'react';

// import {
//   Switch,
//   Route
// } from 'react-router-dom';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


// import Router from './showcase-router'



import GroceryRouter from './groceryRouter';

import DepartmentRouter from './departmentRouter'



// import IngredientsRouter from ''

// import FavoritesRouter from ''
// import PurchasedRouter from ''


// Later this router will be used as App router that will connect nested routes, from sub-components
// https://medium.com/iqube-bits/a-modular-approach-to-routing-with-react-router-4-d4a3db9f56ae

import NotFoundComponent from '../components/NotFoundComponent'


class AppRouter extends Component {
  render() {
    return (
          <Switch>
              <Route path='/'            component={GroceryRouter} />
              <Route path='/department'  component={DepartmentRouter} />


              {/*}<Route path='/grocery'    component={GroceryRouter} /> */}

                          <Route component={NotFoundComponent}></Route>


          </Switch>
    );
  }
}



export default AppRouter;
