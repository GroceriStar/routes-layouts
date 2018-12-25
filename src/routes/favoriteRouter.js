import React, {
  Component, Fragment
} from 'react';
import {
   Route
} from 'react-router-dom';

import {
  FavoritesView,
  FavoriteView

} from '../views/favoriteViews';


const favorite_routes = [
  {
    path: "/favorites/:groceryId",
    component: FavoritesView
  },
  {
    path: "/favorites/:groceryId/:id",
    component: FavoriteView
  },

];

export default favorite_routes;
