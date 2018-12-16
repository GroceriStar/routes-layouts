import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Link } from "react-router-dom";
// import { withRouter } from "react-router";

// import Header from '../components/Header';

// import routes from './config/showcase';

const Sep = () => <span> | </span>;

//
// <NavLink exact to={'/dashboard'}
//          disabled={this.props.item.disabled}
//          activeClassName='active'>
//
// <NavLink exact to={'/dashboard/accounts'}
//          disabled={this.props.item.disabled}
//          activeClassName='active'>

const Header = () => {
  return (
    <div>
      <Link to="/">Home</Link> <Sep />
      <Link to="/grocery/:id">view grocery</Link> <Sep />
      <Link to="/design/grocery/:id">designed grocery page</Link> <Sep />
      <Link to="/groceries">all groceries</Link>
      <Link to="/manage/grocery/:id">manage grocery</Link> <Sep />
      <hr/>
    </div>
  )
}


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

// const Tacos = ({ match }) => (
//   // here's a nested div
//   <div>
//     {/* here's a nested Route,
//         match.url helps us make a relative path */}
//     <Route path={match.url + "/carnitas"} component={Carnitas} />
//   </div>
// );

class Router extends Component {
  render(){
    return (
      <Fragment>






      <BrowserRouter>
        <Header />
        <Switch>

          <Route path="/" exact component={HomeView} />

          <Route path="/grocery/:id"  component={GroceryView} />

          <Route path="/design/grocery/:id"  component={DesignedGroceryView} />

          <Route path="/groceries"  component={GroceriesView} />

          <Route path="/manage/grocery/:id"  component={ManageGroceryView} />




          {/*

            <Route path="/grocery/:id/:departmentId"  component={GroceryView} />
            <Route path="/grocery/:id/full"  component={GroceryView} />

            <Route path="/grocery/:id/print"  component={GroceryView} />
            <Route path="/grocery/:id/clone"  component={GroceryView} />


            <Route path="/grocery/:id/:departmentId/:status"  component={GroceryView} />
            <Route path="/grocery/:id/:departmentId/all"  component={GroceryView} />
            <Route path="/grocery/:id/:departmentId/purchased"  component={GroceryView} />
            <Route path="/grocery/:id/:departmentId/the-third-key"  component={GroceryView} />

              

             */}

          {/*

             */}


        </Switch>
      </BrowserRouter>
      </Fragment>
    )
  }
}

export default Router;
