import React, { Component, Fragment } from 'react'
import { AuthRoute } from 'react-router-auth'
import HomeView from './index'index


class Example extends Component {
  render () {
    return(
      <AuthRoute
        path="/profile"
        component={HomeView}
        redirectTo="/login"
        authenticated={this.props.authenticated}
      />
    )
  }
}
// https://github.com/joelseq/react-router-auth
