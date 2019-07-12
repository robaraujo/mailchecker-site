import React, { Component } from 'react';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';

// Material helpers
import { withStyles, Grid, Paper, IconButton, Slide } from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';

import { Dashboard as DashboardLayout } from 'layouts';
import { DoughnutEmails, ListEmails } from 'components';
import SelectFile from './components/SelectFile';

// Component styles
import styles from './style';

// redux
import { connect } from 'react-redux';
import { validate, clearValidated } from '../../store/email';

class EmailValidateMass extends Component {
  componentDidMount() {
    //this.props.onClearValidated();
  }

  render() {
    const { classes } = this.props;
    const listValidated = this.props.emailStore.recent.mass;

    return (
      <DashboardLayout title="Validação em remessa">
        <div className={classes.root}>
          <Grid container spacing={3} className={classes.emailMassContainer}>
            <Grid item sm={6} xs={12} style={{ zIndex: 1 }}>
              <Paper>
                <SelectFile
                  onSubmit={this.props.onValidate}
                  className={classes.control}
                />
              </Paper>
            </Grid>
            <Slide
              direction="right"
              in={listValidated}
              style={{ transformOrigin: '0 0 0' }}
              timeout={1500}
              mountOnEnter
              unmountOnExit>
              <Grid item sm={6} xs={12}>
                <Paper className={classes.control}>
                  <IconButton
                    onClick={this.props.onClearValidated}
                    aria-label="close"
                    className={classes.iconClose}>
                    <CloseIcon />
                  </IconButton>
                  <DoughnutEmails emails={listValidated || []} />
                  <ListEmails emails={listValidated || []} />
                </Paper>
              </Grid>
            </Slide>
          </Grid>
        </div>
      </DashboardLayout>
    );
  }
}

EmailValidateMass.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

const mapStateToProps = ({ email }) => {
  return {
    emailStore: email
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onValidate: mails => dispatch(validate(mails, 'mass')),
    onClearValidated: () => dispatch(clearValidated())
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(styles)
)(EmailValidateMass);
