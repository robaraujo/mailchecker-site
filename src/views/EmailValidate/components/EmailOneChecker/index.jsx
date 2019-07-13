import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Material helpers
import {
  withStyles,
  Typography,
  TextField,
  Button,
  Grid
} from '@material-ui/core';

// Component styles
import styles from './styles';

class EmailOneChecker extends Component {
  state = {
    error: null,
    email: ''
  };

  keyPressed = event => {
    if (event.key === 'Enter') {
      this.validate();
    }
  };

  inputChange = event => {
    this.setState({ email: event.target.value, error: null });
  };

  validate = () => {
    const { email } = this.state;

    // simple e-mail validation
    if (!email || email.indexOf('@') === -1) {
      return this.setState({ error: 'Informe um e-mail de formato válido.' });
    }

    this.props.onSubmit(email);
  };

  render() {
    const { classes } = this.props;
    const { email, error } = this.state;

    return (
      <div>
        <Typography variant="h4" className={classes.title}>
          Validação única
          <Typography variant="body2">
            Informe o e-mail que deseja testar no campo abaixo
          </Typography>
        </Typography>

        <div className={classes.inputContainer}>
          <TextField
            id="outlined-dense"
            className={classes.input}
            margin="dense"
            variant="outlined"
            value={email}
            onKeyPress={this.keyPressed}
            onChange={this.inputChange}
          />
          {!!error && (
            <Typography variant="body2" className={classes.danger}>
              {error}
            </Typography>
          )}
        </div>
        <Button
          variant="contained"
          color="primary"
          className={classes.btn}
          onClick={this.validate}>
          Validar
        </Button>
      </div>
    );
  }
}

EmailOneChecker.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  onSubmit: PropTypes.func
};

EmailOneChecker.defaultProps = {
  onSubmit: () => {}
};

export default withStyles(styles)(EmailOneChecker);
