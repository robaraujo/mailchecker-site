import React, { Component } from 'react';
import compose from 'recompose/compose';

// Externals
import PropTypes from 'prop-types';

// Material helpers
import { withStyles, Link, AppBar, Tabs, Tab } from '@material-ui/core';

// Shared layouts
import { Dashboard as DashboardLayout } from 'layouts';

// Custom components
import { EmailOneChecker } from './components';
import { ListEmails } from 'components';

// Component styles
import styles from './style';

// redux
import { connect } from 'react-redux';
import { validate, clearValidated } from '../../store/email';

class EmailValidate extends Component {
  componentDidMount() {
    //this.props.onClearValidated();
  }

  render() {
    const { classes } = this.props;
    const validated = this.props.emailStore.recent.one;

    return (
      <DashboardLayout title="Valide seus e-mails">
        <div className={classes.root}>
          <Grid container spacing={3} className={classes.emailMassContainer}>
            <Grid item sm={6} xs={12}>
              <EmailOneChecker onSubmit={mail => this.props.onValidate(mail)} />
            </Grid>
            {!!validated && (
              <Grid item sm={6} xs={12}>
                <Paper className={classes.control}>
                  <IconButton
                    onClick={this.props.onClearValidated}
                    aria-label="close"
                    className={classes.iconClose}>
                    <CloseIcon />
                  </IconButton>
                  <ListEmails emails={[validated]} />
                </Paper>
              </Grid>
            )}
          </Grid>
        </div>
      </DashboardLayout>
    );
  }
}

EmailValidate.propTypes = {
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
    onValidate: mail => dispatch(validate(mails, 'on')),
    onClearValidated: () => dispatch(clearValidated())
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(styles)
)(EmailValidate);
