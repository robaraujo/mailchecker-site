import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

// Views
import Dashboard from './views/Dashboard';
import Emails from './views/Emails';
import EmailValidate from './views/EmailValidate';
import EmailValidateMass from './views/EmailValidateMass';
import Account from './views/Account';
import Settings from './views/Settings';
import SignUp from './views/SignUp';
import SignIn from './views/SignIn';
import UnderDevelopment from './views/UnderDevelopment';
import NotFound from './views/NotFound';
import Landing from 'views/Landing';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      !rest.auth ? (
        <Redirect
          to={{
            pathname: rest.redir || '/sign-in',
            state: { from: props.location }
          }}
        />
      ) : (
        <Component {...props} />
      )
    }
  />
);

class Routes extends Component {
  componentDidMount() {
    axios.defaults.baseURL = 'http://localhost:3000';
    console.log(this.props.auth.token);
    axios.defaults.headers.common['authorization'] = this.props.auth.token;
  }

  componentDidUpdate = prevProps => {
    if (this.props.auth.token !== prevProps.auth.token) {
      axios.defaults.headers.common['authorization'] = this.props.auth.token;
    }
  };

  render() {
    const auth = !!this.props.auth.user;
    return (
      <Switch>
        {/* <Redirect exact from="/" to="/dashboard" /> */}
        <Route component={Landing} exact path="/" />
        <PrivateRoute
          auth={!auth}
          redir="/dashboard"
          component={SignUp}
          exact
          path="/sign-up"
        />
        <PrivateRoute
          auth={!auth}
          redir="/dashboard"
          component={SignIn}
          exact
          path="/sign-in"
        />
        <PrivateRoute
          auth={auth}
          component={Dashboard}
          exact
          path="/dashboard"
        />
        <PrivateRoute
          auth={auth}
          component={EmailValidate}
          exact
          path="/email-validate"
        />
        <PrivateRoute
          auth={auth}
          component={EmailValidateMass}
          exact
          path="/email-validate-mass"
        />
        <PrivateRoute auth={auth} component={Emails} exact path="/emails" />
        <PrivateRoute auth={auth} component={Account} exact path="/account" />
        <PrivateRoute auth={auth} component={Settings} exact path="/settings" />
        <Route component={NotFound} exact path="/not-found" />
        <Route component={UnderDevelopment} exact path="/under-development" />
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
