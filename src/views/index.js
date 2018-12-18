

const HomeView = ({ routes }) => (
  <div>
  HomeView

  {/*}<RouterConfigExample {...routes} />*/}

  </div>
)




// const { match } = this.props
//
// console.log(match.path)
// console.log(match.url)

const GroceriesView = ({ match }) => (
  <div>
    GroceriesView - {match.url}
  </div>
)

const GroceryView = ({ match }) => (
  <div>
    GroceryView - {match.url}
  </div>
)

const ManageGroceryView = ({ match }) => (
  <div>
    ManageGroceryView - {match.url}
  </div>
)

const DesignedGroceryView = ({ match }) => (
  <div>
  DesignedGroceryView - {match.url}
  </div>
)

export {
  HomeView,
  GroceriesView,
  GroceryView,
  ManageGroceryView,
  DesignedGroceryView
}
