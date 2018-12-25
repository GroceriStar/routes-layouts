import React, {
  Component, Fragment
} from 'react';
import {
   Route
} from 'react-router-dom';

import {
  PurchasedAtGroceryView,
  PurchasedItemView,
  PurchasedListView,
  ManagePurchasedView,
  ManagePurchasedByDateView

} from '../views/purchasedViews';

const purchased_routes = [
  {
    path: "/purchased/:groceryId",
    component: PurchasedAtGroceryView
  },
  {
    path: "/purchased/:groceryId/:id",
    component: PurchasedItemView
  },
  {
    path: "/all/purchased",
    component: PurchasedListView
  },
  {
    path: "/manage/purchased/:groceryId",
    component: ManagePurchasedView
  },
  {
    path: "/manage/purchased/:groceryId/:date",
    component: ManagePurchasedByDateView
  },

];

export default purchased_routes;
