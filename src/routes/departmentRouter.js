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

// import rouTE from 'route'

// /manage/departments/:groceryId
// /manage/department/:groceryId:/departmentId

const routesse = [
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
  }
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






      </Fragment>
    );
  }
}
// export default DepartmentRouter;

export {
  DepartmentRouter,
  routesse //@TODO bad name
}
