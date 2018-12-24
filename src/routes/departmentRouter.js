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
import _ from 'lodash';

// import rouTE from 'route'

const routes = [
  {
    path: "/departments/:groceryId",
    component: DepartmentsView
  },
  {
    path: "/department/:id/:groceryId",
    component: DepartmentView
  },
  {
    path: "/department/:id/:groceryId/:status",
    component: DepartmentView
  },
  {
    path: "/manage/departments/:groceryId",
    component: ManageDepartmentsView
  },
  {
    path: "/manage/department/:groceryId:/departmentId",
    component: ManageDepartmentView
  },
];


// <Route path="/departments" exact component={DepartmentsView} />
//
//
// {/* status: all, purchased, the-third-key and without status option */}
// <Route path="/department/:id/:groceryId/:status"  component={DepartmentView} />
// <Route path="/department/:id/:groceryId"  component={DepartmentView} />







class DepartmentRouter extends Component {
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
// export default DepartmentRouter;

export {
  DepartmentRouter,
  routes
}
