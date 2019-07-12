import React, { Component } from 'react';

// Externals
import classNames from 'classnames';
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import { Button, TextField } from '@material-ui/core';

// Shared components
import {
  Portlet,
  PortletHeader,
  PortletLabel,
  PortletContent,
  PortletFooter
} from 'components';

// Component styles
import styles from './styles';

const states = [
  {
    value: 'alabama',
    label: 'Alabama'
  },
  {
    value: 'new-york',
    label: 'New York'
  },
  {
    value: 'san-francisco',
    label: 'San Francisco'
  }
];

class Account extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: ''
  };

  handleChange = e => {
    this.setState({
      state: e.target.value
    });
  };

  render() {
    const { classes, className, ...rest } = this.props;
    const { firstName, lastName, email } = this.props.user;

    const rootClassName = classNames(classes.root, className);

    return (
      <Portlet {...rest} className={rootClassName}>
        <PortletHeader>
          <PortletLabel
            subtitle="A informação pode ser editada"
            title="Perfil"
          />
        </PortletHeader>
        <PortletContent noPadding>
          <form autoComplete="off" noValidate>
            <div className={classes.field}>
              <TextField
                className={classes.textField}
                helperText="Por favor especifique o primeiro nome"
                label="Nome"
                margin="dense"
                required
                value={firstName}
                variant="outlined"
              />
              <TextField
                className={classes.textField}
                label="Sobrenome"
                margin="dense"
                required
                value={lastName}
                variant="outlined"
              />
            </div>
            <div className={classes.field}>
              <TextField
                className={classes.textField}
                label="E-mail"
                margin="dense"
                required
                value={email}
                variant="outlined"
              />
            </div>
          </form>
        </PortletContent>
        <PortletFooter className={classes.portletFooter}>
          <Button
            onClick={() => alert('TODO')}
            color="primary"
            variant="contained">
            Atualizar
          </Button>
        </PortletFooter>
      </Portlet>
    );
  }
}

Account.propTypes = {
  user: PropTypes.object.isRequired,
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Account);
