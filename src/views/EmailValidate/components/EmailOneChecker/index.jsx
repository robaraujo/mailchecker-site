import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Externals
import classNames from 'classnames';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import { TextField, Button } from '@material-ui/core';

import { CloudUpload, PeopleOutlined } from '@material-ui/icons';
import Icon from '@material-ui/core/Icon';

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
    const { classes } = this.props;
    const { email, error } = this.state;

    return (
      <div className={classes.emailOneContainer}>
        <TextField
          id="outlined-dense"
          label="Dense"
          className={clsx(classes.textField, classes.dense)}
          margin="dense"
          variant="outlined"
          value={email}
          onChange={email => this.setState({ email })}
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
