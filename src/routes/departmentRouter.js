import React, {
  Component, Fragment
} from 'react';
import {
   Route
} from 'react-router-dom';

import {
  DepartmentsView,
  DepartmentView,
  ManageDepartmentsView,
  ManageDepartmentView
} from '../views';



class DepartmentRouter extends Component {
  render() {
    return (
          <Fragment>


            <Route path="/" exact component={DepartmentsView} />


            {/* status: all, purchased, the-third-key and without status option */}
            <Route path="/department/:id/:groceryId/:status"  component={DepartmentView} />
            <Route path="/department/:id/:groceryId"  component={DepartmentView} />








          </Fragment>
    );
  }
}
export default DepartmentRouter;
