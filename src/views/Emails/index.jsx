import React, { Component } from 'react';
import compose from 'recompose/compose';

// Externals
import PropTypes from 'prop-types';

// Material helpers
import { withStyles, Paper } from '@material-ui/core';

// Shared layouts
import { Dashboard as DashboardLayout } from 'layouts';

// Custom components
import { EmailsToolbar, EmailsTable } from './components';

// Component styles
import styles from './style';

// redux
import { connect } from 'react-redux';
import { getAll, validate } from '../../store/email';

class Emails extends Component {
  state = {
    selectedEmails: []
  };

  componentDidMount() {
    this.props.onGetAll();
  }

  render() {
    const { emailStore, classes } = this.props;
    const { selectedEmails } = this.state;

    return (
      <DashboardLayout title="E-mails checados">
        <div className={classes.root}>
          <Paper className={classes.control}>
            <EmailsToolbar selectedEmails={selectedEmails} />
            <EmailsTable
              onSelect={selectedEmails => this.setState({ selectedEmails })}
              emails={emailStore.list}
            />
          </Paper>
        </div>
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
    emailStore: email
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
