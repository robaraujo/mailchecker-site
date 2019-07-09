import React, { Component } from 'react';

// Externals
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import { Grid, Typography } from '@material-ui/core';

// Component styles
const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 4
  },
  content: {
    marginTop: '150px',
    textAlign: 'center'
  },
  image: {
    display: 'inline-block',
    marginTop: '50px',
    maxWidth: '100%',
    width: '554px'
  }
});

class UnderDevelopment extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <a href="/sign-up">Cadastrar</a>
      </div>
    );
  }
}

UnderDevelopment.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UnderDevelopment);
