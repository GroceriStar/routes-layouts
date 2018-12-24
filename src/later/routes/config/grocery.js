
const routesee = [
  // {
  //   path: "/",
  //   component: HomeView
  // },
  {
    path: "/groceries",
    component: GroceriesView
  },
  {
    path: "/grocery/:id",
    component: GroceryView,
    // routes: [
    //   {
    //     path: "/grocery/:id/full",
    //     component: FullGroceryView
    //   },
    //   {
    //     path: "/grocery/:id/print",
    //     component: PrintGroceryView
    //   },
    //   {
    //     path: "/grocery/:id/clone",
    //     component: CloneGroceryView
    //   }
    // ]
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
  },
  // {
  //   path: "/grocery/:id/:status",
  //   component: GroceryView
  // },


];

//
//
// export default routes;
