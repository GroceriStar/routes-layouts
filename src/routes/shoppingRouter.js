import React, {
  Component, Fragment
} from 'react';
import {
   Route
} from 'react-router-dom';

import {
  ShoppingView,
  EditShoppingView,
  PreviewShoppingView,
  ChangeNameView,
  GroceriesAllView,
  ChangeDepIdView,
  AddIngredientView,
  TogglePurchasedView,
  ClearPurchasedView,
  UnnatachView
} from '../views/shoppingViews';




const shopping_routes = [
  {
    path: '/shopping/:groceryId/:departmentId',
    component: ShoppingView
  },
  {
    path: '/changename/',
    component: ChangeNameView
  },
  {
    path: '/view/groceries',
    component: GroceriesAllView
  },
  {
    path: '/changedepartmentid/:id/:departmentId',
    component: ChangeDepIdView
  },
  {
    path: '/add/ing/:id/:groceryId',
    component: AddIngredientView
  },
  {
    path: '/togglepurchased',
    component: TogglePurchasedView
  },
  {
    path: '/clearpurchased',
    component: ClearPurchasedView
  },
  {
    path: '/unattach',
    component: UnnatachView
  },
  {
    path: '/shopping/edit/:groceryId/:departmentId',
    component: EditShoppingView
  },
  {
    path: '/shopping/preview/:groceryId/:departmentId',
    component: PreviewShoppingView
  },

  

];


export default shopping_routes;
