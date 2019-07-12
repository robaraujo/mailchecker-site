import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import compose from 'recompose/compose';

// Material components
import { Grid } from '@material-ui/core';

// Shared layouts
import { Dashboard as DashboardLayout } from 'layouts';

// Custom components
import { AccountProfile, AccountDetails } from './components';

// Component styles
const styles = theme => ({
  root: {
    padding: theme.spacing(4)
  }
});

class Account extends Component {
  state = { tabIndex: 0 };

  render() {
    const { classes, auth } = this.props;
    console.log('auth', auth);

    return (
      <DashboardLayout title="Perfil">
        <div className={classes.root}>
          <Grid container spacing={4}>
            <Grid item lg={4} md={6} xl={4} xs={12}>
              <AccountProfile user={auth.user} />
            </Grid>
            <Grid item lg={8} md={6} xl={8} xs={12}>
              <AccountDetails user={auth.user} />
            </Grid>
          </Grid>
        </div>
      </DashboardLayout>
    );
  }
}

Account.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = ({ auth }) => {
  return { auth: auth };
};

export default compose(
  connect(mapStateToProps),
  withStyles(styles)
)(Account);
