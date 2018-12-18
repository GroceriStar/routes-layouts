import React, {
  Component
} from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';

import Router from './showcase-router'

// import

// import GroceryRouter from './components/GroceryList/GroceryRouter';

// import DepartmentsRouter from ''



// import IngredientsRouter from ''
// import FavoritesRouter from ''
// import PurchasedRouter from ''


// Later this router will be used as App router that will connect nested routes, from sub-components
// https://medium.com/iqube-bits/a-modular-approach-to-routing-with-react-router-4-d4a3db9f56ae

class Router extends Component {
  render() {
    return (
          <Switch>
              <Route path='/'            component={Router} />
              {/*}<Route path='/grocery'    component={GroceryRouter} /> */}


          </Switch>
    );
  }
}



export default Router;
