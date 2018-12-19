import React, {
  Component, Fragment
} from 'react';
import {
   Route
} from 'react-router-dom';

import { Public, Login, Protected } from './components/Login'

// https://reacttraining.com/react-router/web/example/auth-workflow
// https://tylermcginnis.com/react-router-protected-routes-authentication/

function AuthExample () {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/public">Public Page</Link></li>
          <li><Link to="/protected">Protected Page</Link></li>
        </ul>

        <Route path="/public" component={Public}/>
        <Route path="/login" component={Login}/>
        <PrivateRoute path='/protected' component={Protected} />

      </div>
    </Router>
  )
}

export default AuthExample
