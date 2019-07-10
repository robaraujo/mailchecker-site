import React, { Component } from 'react';

// Externals
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import { Button, Grid } from '@material-ui/core';

// Material icons
import { ArrowUpward } from '@material-ui/icons';

// Shared components
import { SearchInput } from 'components';

// Component styles
import styles from './styles';

class EmailsToolbar extends Component {
  render() {
    const { classes, className, selectedEmails } = this.props;

    const rootClassName = classNames(classes.root, className);

    return (
      <div className={classes.toolbarContainer}>
        <div className={classes.searchInputWrap}>
          <SearchInput
            className={classes.searchInput}
            placeholder="Search email"
          />
        </div>
        <Button
          className={classes.exportButton}
          size="small"
          variant="outlined">
          <ArrowUpward className={classes.exportIcon} />
          Export
        </Button>
      </div>
    );
  }
}

EmailsToolbar.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  selectedEmails: PropTypes.array
};

EmailsToolbar.defaultProps = {
  selectedEmails: []
};

export default withStyles(styles)(EmailsToolbar);
