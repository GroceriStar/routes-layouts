// import React, { Component, Fragment } from 'react';
// import {
//   Link, Route
// } from 'react-router-dom';


const HomeView = ({ routes }) => {

  // console.log(match);
  return (
    <div>
      HomeView



    </div>
  )
}

const LoginView = ({ routes }) => {

  // console.log(match);
  return (
    <div>
      LoginView



    </div>
  )
}

const ProtectedView = ({ routes }) => {

  // console.log(match);
  return (
    <div>
      ProtectedView



    </div>
  )
}



import {
  // HomeView,
  GroceriesView,
  GroceryView,
  ManageGroceryView,
  DesignedGroceryView,

  PrintGroceryView,
  FullGroceryView,
  CloneGroceryView

} from './groceryViews'

import {
  DepartmentsView,
  DepartmentView,
  ManageDepartmentsView,
  ManageDepartmentView
} from './departmentViews'

export {
  HomeView,
  LoginView,
  ProtectedView,

  GroceriesView,
  GroceryView,
  ManageGroceryView,
  DesignedGroceryView,

  PrintGroceryView,
  FullGroceryView,
  CloneGroceryView,



  DepartmentsView,
  DepartmentView,
  ManageDepartmentsView,
  ManageDepartmentView
}
