import React, { Component } from 'react';
import compose from 'recompose/compose';

// Externals
import PropTypes from 'prop-types';

// Material helpers
import { withStyles, Grid, IconButton, Paper, Slide } from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';

// Shared layouts
import { Dashboard as DashboardLayout } from 'layouts';

// Custom components
import { EmailOneChecker, SelectFile } from './components';
import { ListEmails, DoughnutEmails } from 'components';

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
    const { classes, multiple, emailStore } = this.props;
    const validateList = multiple
      ? emailStore.recent.mass
      : emailStore.recent.one;

    return (
      <DashboardLayout title="Valide seus e-mails">
        <div className={classes.root}>
          <Grid container spacing={3} className={classes.emailMassContainer}>
            <Grid item md={6} xs={12}>
              <Paper className={classes.control}>
                {multiple ? (
                  <SelectFile
                    onSubmit={mails => this.props.onValidate(mails, 'mass')}
                    className={classes.control}
                  />
                ) : (
                  <EmailOneChecker
                    onSubmit={mail => this.props.onValidate(mail, 'one')}
                  />
                )}
              </Paper>
            </Grid>
            <Slide
              direction="right"
              in={validateList}
              style={{ transformOrigin: '0 0 0' }}
              {...(validateList ? { timeout: 1500 } : {})}
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
                  {multiple && <DoughnutEmails emails={validateList || []} />}
                  <ListEmails emails={validateList || []} />
                </Paper>
              </Grid>
            </Slide>
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
    onValidate: (mail, type) => dispatch(validate(mail, type)),
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
