
{/*
  <Route path='/shopping/:groceryId/:departmentId'            component={Component} />
  <Route path='/changename'     component={Component} />
  <Route path='/view/groceries'         component={Component} />
  <Route path='/changedepartmentid/:id/:departmentId'        component={Component} />
  <Route path='/add/ing/:id/:groceryId' component={Component} />

  <Route path='/togglepurchased' component={Component} />
  <Route path='/clearpurchased' component={Component} />
  <Route path='/unattach' component={Component} />
  */}

const routes = [
  {
    path: "/shopping/:groceryId/:departmentId",
    component: Sandwiches
  },
  {
    path: "/changename",
    component: Tacos
  },
  {
    path: "/view/groceries",
    component: Tacos
  },
  {
    path: "/changedepartmentid/:id/:departmentId",
    component: Tacos
  },
  {
    path: "/add/ing/:id/:groceryId",
    component: Tacos
  },
  {
    path: "/togglepurchased",
    component: Tacos
  },
  {
    path: "/clearpurchased",
    component: Tacos
  },
  {
    path: "/unattach",
    component: Tacos
  }
];

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
