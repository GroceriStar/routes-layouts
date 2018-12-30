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


const department_routes = [
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



export default department_routes;
