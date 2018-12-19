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

// import NotFoundComponent from '../components/NotFoundComponent'

class DepartmentRouter extends Component {
  render() {
    return (
          <Fragment>


            <Route path="/" exact component={DepartmentsView} />



            <Route path="/grocery/:id/:departmentId/:status"  component={DepartmentView} />
            <Route path="/grocery/:id/:departmentId/all"  component={DepartmentView} />
            <Route path="/grocery/:id/:departmentId/purchased"  component={DepartmentView} />
            <Route path="/grocery/:id/:departmentId/the-third-key"  component={DepartmentView} />
            <Route path="/grocery/:id/:departmentId"  component={DepartmentView} />








          </Fragment>
    );
  }
}
export default DepartmentRouter;
