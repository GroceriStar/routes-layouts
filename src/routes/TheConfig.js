import React, {
  Fragment
} from 'react';

import {
  // BrowserRouter as Router,
   Route } from 'react-router-dom';


import _ from 'lodash';


const renderRoutes = (routes) => {
  return (
    <Fragment>
      {routes &&
        routes.map((route, i) => (

            <Route
              key={i}
              path={route.path}
              component={route.component}
            />

          ))
      }
    </Fragment>
  );
};

export {

  renderRoutes
}
