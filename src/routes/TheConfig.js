import React, {
  Fragment
} from 'react';

import {
  // BrowserRouter as Router,
   Route } from 'react-router-dom';


// @TODO think about converting into a component. at least for now - when we try to call it as component it generate an issue
// <RouterConfigExample routes={routes} />}

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


// @TODO yeah, make it with fat arrow too
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


const renderRoutes = (routes) => {
  return (
    <Fragment>
      {routes &&
        routes.map((route, i) => (

            <Route
              key={i}
              path={route.path}
              render={props => (
                // pass the sub-routes down to keep nesting
                <route.component {...props} />
              )}
            />

          ))
      }
    </Fragment>
  );
};

export {
  RouterConfigExample,
  RouteWithSubRoutes,

  renderRoutes
}
