import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// Views
import Dashboard from './views/Dashboard';
import ProductList from './views/ProductList';
import UserList from './views/UserList';
import Account from './views/Account';
import Settings from './views/Settings';
import SignUp from './views/SignUp';
import SignIn from './views/SignIn';
import UnderDevelopment from './views/UnderDevelopment';
import NotFound from './views/NotFound';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      !rest.auth ? (
        <Redirect
          to={{ pathname: '/sign-in', state: { from: props.location } }}
        />
      ) : (
        <Component {...props} />
      )
    }
  />
);

class Routes extends Component {
  render() {
    const auth = !!this.props.auth.user;
    return (
      <Switch>
        <Redirect exact from="/" to="/dashboard" />
        <Route component={SignUp} exact path="/sign-up" />
        <Route component={SignIn} exact path="/sign-in" />
        <Route component={NotFound} exact path="/not-found" />
        <Route component={UnderDevelopment} exact path="/under-development" />
        <PrivateRoute
          auth={auth}
          component={Dashboard}
          exact
          path="/dashboard"
        />
        <PrivateRoute auth={auth} component={UserList} exact path="/users" />
        <PrivateRoute
          auth={auth}
          component={ProductList}
          exact
          path="/products"
        />
        <PrivateRoute auth={auth} component={Account} exact path="/account" />
        <PrivateRoute auth={auth} component={Settings} exact path="/settings" />
        <Redirect to="/not-found" />
      </Switch>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth: auth
  };
};

export default connect(mapStateToProps)(Routes);
