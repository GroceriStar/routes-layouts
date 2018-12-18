// some of the preparation was done at Showcase projects.
// take a look on it later

  //
  // render() {
  //
  //   const { id } = this.props.match.params;
  //

  const HomeView = ({ routes }) => (
    <div>
    HomeView

    {/*}<RouterConfigExample {...routes} />*/}

    </div>
  )


  const RouterConfigExample = (routes) => {

    return (
      <Fragment>
      {routes &&
        routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))
      }
      </Fragment>
    );
  }

  function RouteWithSubRoutes(route) {
    return (
      <Route
        path={route.path}
        render={props => (
          // pass the sub-routes down to keep nesting
          <route.component {...props} routes={route.routes} />
        )}
      />
    );
  }







const ChangeGroceryNameView = ({ match }) => {
  return (
    <div>
    ChangeGroceryNameView - we got an id {match.url}
      <hr/>
    </div>
  )
}

const CloneGroceryView  = ({ match }) => {
  return (
    <div>
    CloneGroceryView  we got an id {match.url}
      <hr/>
    </div>
  )
}

const CreateGroceryView  = ({ match }) => {
  return (
    <div>
    CreateGroceryView
      <hr/>
    </div>
  )
}



const GroceriesView = ({ match }) => (
  <div>
    GroceriesView
  </div>
)

const GroceryView = ({ match }) => (
  <div>
    GroceryView {match.url}
  </div>
)

const ManageGroceryView = ({ match }) => (
  <div>
    ManageGroceryView {match.url}
  </div>
)

const DesignedGroceryView = ({ match }) => (
  <div>
  DesignedGroceryView {match.url}
  </div>
)

export {
  HomeView,
  ChangeGroceryNameView,
  CloneGroceryView,
  CreateGroceryView,
  GroceriesView,
  GroceryView,
  ManageGroceryView,
  DesignedGroceryView
}
