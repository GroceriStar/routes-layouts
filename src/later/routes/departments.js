import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// https://github.com/GroceriStar/groceristar/blob/master/server/controllers/department-controller.js

const HomeView = ({ match }) => (
  <div>
  HomeView
  </div>
)

const DepartmentByGroceryList  = ({ match }) => (
  <div>
    DepartmentByGroceryList
  </div>
)

const DataByDepartment  = ({ match }) => (
  <div>
    DataByDepartment - we got an id
  </div>
)

const HideDepartment  = ({ match }) => (
  <div>
    HideDepartment - we got an id
  </div>
)

const RemoveDepartment  = ({ match }) => (
  <div>
  RemoveDepartment - we got an id
  </div>
)


const ShowAllDepartment  = ({ match }) => (
  <div>
  ShowAllDepartment - we got an id
  </div>
)


const ToggleStatus   = ({ match }) => (
  <div>
ToggleStatus - we got an id </div>
)


const UnhideDepartment  = ({ match }) => (
  <div>
  UnhideDepartment - we got an id
  </div>
)

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>

          <Route path="/" exact component={HomeView} />
          {/*}
          <Route path="/grocery/:id" component={GroceryView} />

          <Route path="/design/grocery/:id" component={DesignedGroceryView} />

          <Route path="/groceries" component={GroceriesView} />

          <Route path="/manage/grocery/:id" component={ManageGroceryView} />
          */}

        </Switch>
      </BrowserRouter>
    )
  }
}

export default Router;
