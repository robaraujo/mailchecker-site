import React, { Component } from 'react';
import compose from 'recompose/compose';

// Externals
import PropTypes from 'prop-types';

// Material helpers
import { withStyles, Paper, Grid } from '@material-ui/core';

// Shared layouts
import { Dashboard as DashboardLayout } from 'layouts';

// Component styles
import styles from './style';

// redux
import { connect } from 'react-redux';

class Api extends Component {
  render() {
    const { classes, auth } = this.props;

    return (
      <DashboardLayout title="Api de integração">
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Paper className={classes.control}>
              <div className={classes.root}>teste</div>
            </Paper>
          </Grid>
        </div>
      </DashboardLayout>
    );
  }
}

Api.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

const mapStateToProps = ({ auth }) => {
  return { auth: auth };
};

export default compose(
  connect(mapStateToProps),
  withStyles(styles)
)(Api);
