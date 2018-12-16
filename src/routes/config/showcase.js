const routes = [
  {
    path: "/groceries",
    component: GroceriesView
  },
  {
    path: "/grocery/:id",
    component: GroceryView,
    routes: [
      {
        path: "/grocery/:id/design",
        component: DesignedGroceryView
      },
      {
        path: "/grocery/:id/manage",
        component: ManageGroceryView
      }
    ]
  }
];
//
// const routes2 = [
//   {
//     path: "/sandwiches",
//     component: Sandwiches
//   },
//   {
//     path: "/tacos",
//     component: Tacos,
//     routes: [
//       {
//         path: "/tacos/bus",
//         component: Bus
//       },
//       {
//         path: "/tacos/cart",
//         component: Cart
//       }
//     ]
//   }
// ];

export default routes;
