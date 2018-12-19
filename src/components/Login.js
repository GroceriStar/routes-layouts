import React, { Fragment } from 'react';


const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100) // fake async
  }
}


const Public = () => (
  <h3>Public</h3>
)

const Protected = () => (
  <h3>Protected</h3>
)

class Login extends React.Component {
  render() {
    return (
      <div>
        Login
      </div>
    )
  }
}

export {
  fakeAuth,
  Public,
  Protected,
  Login
}
