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

export default routes;
