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
  Button,
  Checkbox,
  CircularProgress,
  Grid,
  IconButton,
  TextField,
  Typography
} from '@material-ui/core';

// Material icons
import { ArrowBack as ArrowBackIcon } from '@material-ui/icons';

// Shared utilities
import validators from 'common/validators';

// Component styles
import styles from './styles';

// Form validation schema
import schema from './schema';

// redux
import { connect } from 'react-redux';
import { register, reset } from '../../store/auth';

validate.validators.checked = validators.checked;

class SignUp extends Component {
  state = {
    values: {
      firstName: 'Roberto',
      lastName: 'Araujo',
      email: 'robaraujo404@gmail.com',
      password: '123456',
      policy: true
    },
    touched: {
      firstName: false,
      lastName: false,
      email: false,
      password: false,
      policy: null
    },
    errors: {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      policy: null
    },
    isValid: false
  };

  componentDidUpdate = prevProps => {
    if (this.props.auth.user) {
      this.props.history.push('/dashboard');
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
    newState.touched[field] = true;
    newState.values[field] = value;

    this.setState(newState, this.validateForm);
    this.props.onReset();
  };

  keyPressed = event => {
    if (event.key === 'Enter') {
      this.handleSignUp();
    }
  };

  handleSignUp = async () => {
    const { values } = this.state;

    this.props.onRegister({
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password
    });
  };

  render() {
    const { classes, auth } = this.props;
    const { values, touched, errors, isValid } = this.state;

    const showFirstNameError =
      touched.firstName && errors.firstName ? errors.firstName[0] : false;
    const showLastNameError =
      touched.lastName && errors.lastName ? errors.lastName[0] : false;
    const showEmailError =
      touched.email && errors.email ? errors.email[0] : false;
    const showPasswordError =
      touched.password && errors.password ? errors.password[0] : false;
    const showPolicyError =
      touched.policy && errors.policy ? errors.policy[0] : false;

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
                    Criando uma conta
                  </Typography>
                  <Typography className={classes.subtitle} variant="body1">
                    Use seu email de trabalho para criar uma nova conta ... é
                    grátis.
                  </Typography>
                  <div className={classes.fields}>
                    <TextField
                      className={classes.textField}
                      label="Nome"
                      name="firstName"
                      onChange={event =>
                        this.handleFieldChange('firstName', event.target.value)
                      }
                      value={values.firstName}
                      variant="outlined"
                      onKeyPress={this.keyPressed}
                    />
                    {showFirstNameError && (
                      <Typography
                        className={classes.fieldError}
                        variant="body2">
                        {errors.firstName[0]}
                      </Typography>
                    )}
                    <TextField
                      className={classes.textField}
                      label="Sobrenome"
                      onChange={event =>
                        this.handleFieldChange('lastName', event.target.value)
                      }
                      value={values.lastName}
                      variant="outlined"
                      onKeyPress={this.keyPressed}
                    />
                    {showLastNameError && (
                      <Typography
                        className={classes.fieldError}
                        variant="body2">
                        {errors.lastName[0]}
                      </Typography>
                    )}
                    <TextField
                      className={classes.textField}
                      label="E-mail"
                      name="email"
                      onChange={event =>
                        this.handleFieldChange('email', event.target.value)
                      }
                      value={values.email}
                      variant="outlined"
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
                      onChange={event =>
                        this.handleFieldChange('password', event.target.value)
                      }
                      type="password"
                      value={values.password}
                      variant="outlined"
                    />
                    {showPasswordError && (
                      <Typography
                        className={classes.fieldError}
                        variant="body2">
                        {errors.password[0]}
                      </Typography>
                    )}
                    <div className={classes.policy}>
                      <Checkbox
                        checked={values.policy}
                        className={classes.policyCheckbox}
                        color="primary"
                        name="policy"
                        onChange={() =>
                          this.handleFieldChange('policy', !values.policy)
                        }
                      />
                      <Typography
                        className={classes.policyText}
                        variant="body1">
                        Eu li os &nbsp;
                        <Link className={classes.policyUrl} to="#">
                          Termos e Condições
                        </Link>
                        .
                      </Typography>
                    </div>
                    {showPolicyError && (
                      <Typography
                        className={classes.fieldError}
                        variant="body2">
                        {errors.policy[0]}
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
                      className={classes.signUpButton}
                      color="primary"
                      disabled={!isValid}
                      onClick={this.handleSignUp}
                      size="large"
                      variant="contained">
                      Registrar agora
                    </Button>
                  )}
                  <Typography className={classes.signIn} variant="body1">
                    Já tem conta?&nbsp;
                    <Link className={classes.signInUrl} to="/sign-in">
                      Entrar
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

SignUp.propTypes = {
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
    onRegister: form => dispatch(register(form)),
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
)(SignUp);
