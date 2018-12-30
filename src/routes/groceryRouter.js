import React, {
  Component, Fragment
} from 'react';
import {
 Route
} from 'react-router-dom';

import {
  HomeView,
  GroceriesView,
  GroceryView,
  ManageGroceryView,
  DesignedGroceryView,
  PrintGroceryView,
  FullGroceryView,
  CloneGroceryView

} from '../views';


const grocery_routes = [

  {
    path: "/groceries",
    component: GroceriesView
  },
  {
    path: "/grocery/:id",
    component: GroceryView,

  },


  {
    path: "/full/grocery/:id",
    component: FullGroceryView
  },
  {
    path: "/print/grocery/:id",
    component: PrintGroceryView
  },
  {
    path: "/clone/grocery/:id",
    component: CloneGroceryView
  },




  {
    path: "/design/grocery/:id",
    component: DesignedGroceryView
  },
  {
    path: "/manage/grocery/:id",
    component: ManageGroceryView
  }

];





export default grocery_routes;


// export default GroceryRouter;



//
// <Route path="/grocery/:id/:departmentId/:status"  component={GroceryView} />
// <Route path="/grocery/:id/:departmentId/all"  component={GroceryView} />
// <Route path="/grocery/:id/:departmentId/purchased"  component={GroceryView} />
// <Route path="/grocery/:id/:departmentId/the-third-key"  component={GroceryView} />
// <Route path="/grocery/:id/:departmentId"  component={GroceryView} />
//
//
