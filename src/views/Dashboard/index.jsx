import React, { Component } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';

// Material components
import { withStyles } from '@material-ui/core';
import { Grid } from '@material-ui/core';

// local files
import { Dashboard as DashboardLayout } from 'layouts';

// Custom components
import {
  Budget,
  Users,
  Progress,
  Profit,
  SalesChart,
  DevicesChart
} from './components';

// redux
import { connect } from 'react-redux';
import { getAll } from '../../store/email';

// Component styles
const styles = theme => ({
  root: {
    padding: theme.spacing(4)
  },
  item: {
    height: '100%'
  }
});

class Dashboard extends Component {
  componentDidMount() {
    this.props.onGetAll();
  }

  render() {
    const { classes, emailStore } = this.props;

    return (
      <DashboardLayout title="Dashboard">
        <div className={classes.root}>
          <Grid container spacing={4}>
            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <Budget className={classes.item} />
            </Grid>
            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <Users className={classes.item} />
            </Grid>
            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <Progress className={classes.item} />
            </Grid>
            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <Profit className={classes.item} />
            </Grid>
            <Grid item lg={8} md={12} xl={9} xs={12}>
              <SalesChart emails={emailStore.list} className={classes.item} />
            </Grid>
            <Grid item lg={4} md={6} xl={3} xs={12}>
              <DevicesChart className={classes.item} />
            </Grid>
          </Grid>
        </div>
      </DashboardLayout>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = ({ email }) => {
  return { emailStore: email };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetAll: () => dispatch(getAll())
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(styles)
)(Dashboard);
