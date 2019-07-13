import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

// Externals
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import validate from 'validate.js';
import _ from 'underscore';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import {
  Grid,
  Button,
  IconButton,
  CircularProgress,
  TextField,
  Typography
} from '@material-ui/core';

// Material icons
import { ArrowBack as ArrowBackIcon } from '@material-ui/icons';

// Shared components
import { Facebook as FacebookIcon, Google as GoogleIcon } from 'icons';

// Component styles
import styles from './styles';

// Form validation schema
import schema from './schema';

// redux
import { connect } from 'react-redux';
import { login, reset } from '../../store/auth';

class SignIn extends Component {
  state = {
    values: {
      email: 'robaraujo404@gmail.com',
      password: '123456'
    },
    touched: {
      email: false,
      password: false
    },
    errors: {
      email: null,
      password: null
    },
    isValid: false
  };

  componentDidUpdate = prevProps => {
    if (this.props.auth.user) {
      this.props.history.push('/email-validate');
    }
  };

  handleBack = () => {
    this.props.history.goBack();
  };

  validateForm = _.debounce(() => {
    const { values } = this.state;

    const newState = { ...this.state };
    const errors = validate(values, schema);

    newState.errors = errors || {};
    newState.isValid = errors ? false : true;

    this.setState(newState);
  }, 300);

  handleFieldChange = (field, value) => {
    const newState = { ...this.state };

    newState.submitError = null;
    newState.touched[field] = true;
    newState.values[field] = value;

    this.setState(newState, this.validateForm);
    this.props.onReset();
  };

  keyPressed = event => {
    if (event.key === 'Enter') {
      this.handleSignIn();
    }
  };

  handleSignIn = async () => {
    this.props.onLogin(this.state.values);
  };

  render() {
    const { classes, auth } = this.props;
    const { values, touched, errors, isValid } = this.state;

    const showEmailError = touched.email && errors.email;
    const showPasswordError = touched.password && errors.password;

    return (
      <div className={classes.root}>
        <Grid className={classes.grid} container>
          <Grid className={classes.quoteWrapper} item lg={5}>
            <div className={classes.quote}>
              <div className={classes.quoteInner}>
                <Typography className={classes.quoteText} variant="h1">
                  O verificador de e-mails #1
                </Typography>
                <Typography variant="h3" className={classes.quoteText}>
                  MailChecker é o validador de e-mails líder global em
                  satisfação dos clientes.
                </Typography>
                <div className={classes.person}>
                  <Typography className={classes.name} variant="body1">
                    Roberto Araujo
                  </Typography>
                  <Typography className={classes.bio} variant="body2">
                    Developer at MailChecker
                  </Typography>
                </div>
              </div>
            </div>
          </Grid>
          <Grid className={classes.content} item lg={7} xs={12}>
            <div className={classes.content}>
              <div className={classes.contentHeader}>
                <IconButton
                  className={classes.backButton}
                  onClick={this.handleBack}>
                  <ArrowBackIcon />
                </IconButton>
              </div>
              <div className={classes.contentBody}>
                <form className={classes.form}>
                  <Typography className={classes.title} variant="h2">
                    Entrar
                  </Typography>
                  <Typography className={classes.subtitle} variant="body1">
                    Entrar usando redes sociais
                  </Typography>
                  <Button
                    className={classes.facebookButton}
                    color="primary"
                    onClick={this.handleSignIn}
                    size="large"
                    variant="contained">
                    <FacebookIcon className={classes.facebookIcon} />
                    Login with Facebook
                  </Button>
                  <Button
                    className={classes.googleButton}
                    onClick={this.handleSignIn}
                    size="large"
                    variant="contained">
                    <GoogleIcon className={classes.googleIcon} />
                    Login with Google
                  </Button>
                  <Typography className={classes.sugestion} variant="body1">
                    ou com seu endereço de e-mail
                  </Typography>
                  <div className={classes.fields}>
                    <TextField
                      className={classes.textField}
                      label="E-mail"
                      name="email"
                      onChange={event =>
                        this.handleFieldChange('email', event.target.value)
                      }
                      type="text"
                      value={values.email}
                      variant="outlined"
                      onKeyPress={this.keyPressed}
                    />
                    {showEmailError && (
                      <Typography
                        className={classes.fieldError}
                        variant="body2">
                        {errors.email[0]}
                      </Typography>
                    )}
                    <TextField
                      className={classes.textField}
                      label="Password"
                      name="password"
                      onChange={event =>
                        this.handleFieldChange('password', event.target.value)
                      }
                      type="password"
                      value={values.password}
                      variant="outlined"
                      onKeyPress={this.keyPressed}
                    />
                    {showPasswordError && (
                      <Typography
                        className={classes.fieldError}
                        variant="body2">
                        {errors.password[0]}
                      </Typography>
                    )}
                  </div>
                  {!!auth.error && (
                    <Typography className={classes.submitError} variant="body2">
                      {auth.error}
                    </Typography>
                  )}
                  {auth.loading ? (
                    <CircularProgress className={classes.progress} />
                  ) : (
                    <Button
                      className={classes.signInButton}
                      color="primary"
                      disabled={!isValid}
                      onClick={this.handleSignIn}
                      size="large"
                      variant="contained">
                      Entrar Agora
                    </Button>
                  )}
                  <Typography className={classes.signUp} variant="body1">
                    Ainda não criou conta?{' '}
                    <Link className={classes.signUpUrl} to="/sign-up">
                      Criar
                    </Link>
                  </Typography>
                </form>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

SignIn.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

const mapStateToProps = ({ auth }) => {
  return {
    auth: auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogin: form => dispatch(login(form)),
    onReset: () => dispatch(reset())
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withRouter,
  withStyles(styles)
)(SignIn);
