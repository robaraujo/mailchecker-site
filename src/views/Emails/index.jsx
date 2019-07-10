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
import { EmailsToolbar, EmailMassChecker } from './components';

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

  onSubmit = (form, type) => {
    this.props.onValidate(form, type);
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
        <Grid container>
          <Grid item sm={4} xs={12}>
            <AppBar position="static">
              <Tabs
                value={checkerType}
                onChange={(e, val) => this.setState({ checkerType: val })}>
                <Tab label="Em massa" />
                <Tab label="Única" />
              </Tabs>
            </AppBar>
            {checkerType === 0 && (
              <EmailMassChecker
                onSubmit={form => this.onSubmit(form, 'mass')}
              />
            )}
            {checkerType === 1 && <EmailMassChecker />}
          </Grid>
          <Grid item sm={8} xs={12}>
            <EmailsToolbar selectedUsers={[]} />
            {this.renderUsers()}
          </Grid>
        </Grid>
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
    onValidate: (form, type) => dispatch(validate(form, type))
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(styles)
)(Emails);
