import React, { Component } from 'react';
import compose from 'recompose/compose';

// Externals
import PropTypes from 'prop-types';

// Material helpers
import {
  withStyles,
  Grid,
  AppBar,
  Tabs,
  Tab,
  TabContainer
} from '@material-ui/core';

// Material components
import { CircularProgress, Typography } from '@material-ui/core';

// Shared layouts
import { Dashboard as DashboardLayout } from 'layouts';

// Custom components
import { EmailsToolbar, EmailMassChecker, EmailOneChecker } from './components';

// Component styles
import styles from './style';

// redux
import { connect } from 'react-redux';
import { getAll, validate } from '../../store/email';

class Emails extends Component {
  signal = true;

  state = {
    checkerType: 0
  };

  renderUsers() {
    const { email, classes } = this.props;

    if (email.loading) {
      return (
        <div className={classes.progressWrapper}>
          <CircularProgress />
        </div>
      );
    }

    if (!!email.error) {
      return <Typography variant="h6">{email.error}</Typography>;
    }

    if (email.list.length === 0) {
      return <Typography variant="h6">There are no users</Typography>;
    }

    //return <UsersTable onSelect={this.handleSelect} users={users} />;
  }

  render() {
    const { checkerType } = this.state;

    return (
      <DashboardLayout title="Valide seus e-mails">
        <EmailsToolbar selectedUsers={[]} />
        {this.renderUsers()}
      </DashboardLayout>
    );
  }
}

Emails.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

const mapStateToProps = ({ email }) => {
  return {
    email: email
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetAll: () => dispatch(getAll()),
    onValidate: mails => dispatch(validate(mails))
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(styles)
)(Emails);
