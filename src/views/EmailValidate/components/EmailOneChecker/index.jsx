import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Material helpers
import { withStyles, Typography, TextField, Button } from '@material-ui/core';

// Component styles
import styles from './styles';

class EmailOneChecker extends Component {
  state = {
    error: null,
    email: ''
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
    const { classes, className } = this.props;
    const { email, error } = this.state;
    const inputClassName = classNames(classes.root, className);

    return (
      <div className={classes.emailOneContainer}>
        <TextField
          id="outlined-dense"
          className={inputClassName}
          margin="dense"
          variant="outlined"
          value={email}
          onChange={e => this.setState({ email: e.target.value })}
        />
        {!!error && (
          <Typography variant="body2" className={classes.danger}>
            {error}
          </Typography>
        )}
        <Button onClick={this.validate}>Validar</Button>
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
