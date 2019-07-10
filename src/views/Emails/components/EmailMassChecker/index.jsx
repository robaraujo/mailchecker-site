import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Externals
import classNames from 'classnames';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import {
  Avatar,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  TablePagination,
  Button
} from '@material-ui/core';

import { CloudUpload, PeopleOutlined } from '@material-ui/icons';
import Icon from '@material-ui/core/Icon';

// Shared helpers
import { getInitials } from 'helpers';

// Shared components
import { Portlet, PortletContent } from 'components';

// Component styles
import styles from './styles';

class EmailMassChecker extends Component {
  onChangeHandler = event => {
    const file = event.target.files[0];
    const data = new FormData();
    data.append('file', file);
    this.props.onSubmit(data, 'mass');
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.emailMassContainer}>
        <Typography variant="h2">Import your list here</Typography>
        <div>
          Drag and drop a file here (CSV, TXT, XLS or XLSX up to 30 MB) or
          select an integration as a source
        </div>

        <div className={classes.iconWrapper}>
          <CloudUpload className={classes.icon} />
        </div>

        <Button variant="contained" color="primary" className={classes.button}>
          Select file
        </Button>
        <input
          className={classes.inputUpload}
          type="file"
          name="file"
          onChange={this.onChangeHandler}
        />
      </div>
    );
  }
}

EmailMassChecker.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  onSubmit: PropTypes.func
};

EmailMassChecker.defaultProps = {
  onSubmit: () => {}
};

export default withStyles(styles)(EmailMassChecker);
