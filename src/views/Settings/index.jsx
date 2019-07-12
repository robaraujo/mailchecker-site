import React, { Component } from 'react';

// Externals
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import { Grid } from '@material-ui/core';

// Shared layouts
import { Dashboard as DashboardLayout } from 'layouts';

// Custom components
import { Notifications, Password } from './components';

// Component styles
const styles = theme => ({
  root: {
    padding: theme.spacing(4)
  }
});

class Settings extends Component {
  render() {
    const { classes } = this.props;

    return (
      <DashboardLayout title="Settings">
        <div className={classes.root}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Password />
            </Grid>
          </Grid>
        </div>
      </DashboardLayout>
    );
  }
}

Settings.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Settings);
