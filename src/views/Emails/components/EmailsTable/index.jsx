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
  TablePagination
} from '@material-ui/core';

import {
  DoneOutline as DoneIcon,
  Close as ErrorIcon
} from '@material-ui/icons';

// Shared components
import { Portlet, PortletContent } from 'components';

// Component styles
import styles from './styles';

class EmailsTable extends Component {
  state = {
    selectedEmails: [],
    rowsPerPage: 10,
    page: 0
  };

  handleSelectAll = event => {
    const { emails, onSelect } = this.props;

    let selectedEmails;

    if (event.target.checked) {
      selectedEmails = emails.map(email => email._id);
    } else {
      selectedEmails = [];
    }

    this.setState({ selectedEmails });

    onSelect(selectedEmails);
  };

  handleSelectOne = (event, id) => {
    const { onSelect, emails } = this.props;
    const { selectedEmails } = this.state;

    const selectedIndex = selectedEmails.indexOf(id);
    let newSelectedEmails = [];

    if (selectedIndex === -1) {
      newSelectedEmails = newSelectedEmails.concat(selectedEmails, id);
    } else if (selectedIndex === 0) {
      newSelectedEmails = newSelectedEmails.concat(selectedEmails.slice(1));
    } else if (selectedIndex === selectedEmails.length - 1) {
      newSelectedEmails = newSelectedEmails.concat(selectedEmails.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedEmails = newSelectedEmails.concat(
        selectedEmails.slice(0, selectedIndex),
        selectedEmails.slice(selectedIndex + 1)
      );
    }

    this.setState({ selectedEmails: newSelectedEmails });

    // get all emails with attrs from selected id list
    let selectedEmailsWithAtts = [];
    emails.forEach(email => {
      if (newSelectedEmails.indexOf(email._id) !== -1) {
        selectedEmailsWithAtts.push(email);
      }
    });
    onSelect(selectedEmailsWithAtts);
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  render() {
    const { classes, className, emails } = this.props;
    const { selectedEmails, rowsPerPage, page } = this.state;

    const rootClassName = classNames(classes.root, className);
    const start = page * rowsPerPage;
    const end = start + rowsPerPage;

    return (
      <Portlet className={rootClassName}>
        <PortletContent noPadding>
          <PerfectScrollbar>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="left">
                    <Checkbox
                      checked={selectedEmails.length === emails.length}
                      color="primary"
                      indeterminate={
                        selectedEmails.length > 0 &&
                        selectedEmails.length < emails.length
                      }
                      onChange={this.handleSelectAll}
                    />
                    E-mail
                  </TableCell>
                  <TableCell align="left">Data</TableCell>
                  <TableCell align="left">Envio</TableCell>
                  <TableCell align="left">Válido</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {emails.slice(start, end).map(email => (
                  <TableRow
                    className={classes.tableRow}
                    hover
                    key={email._id}
                    selected={selectedEmails.indexOf(email._id) !== -1}>
                    <TableCell className={classes.tableCell}>
                      <div className={classes.tableCellInner}>
                        <Checkbox
                          checked={selectedEmails.indexOf(email._id) !== -1}
                          color="primary"
                          onChange={event =>
                            this.handleSelectOne(event, email._id)
                          }
                          value="true"
                        />
                        <Link to="#">
                          <Typography
                            className={classes.nameText}
                            variant="body1">
                            {email.email}
                          </Typography>
                        </Link>
                      </div>
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      {email.type === 'mass' ? 'Lote' : 'Único'}
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      {moment(email.createdAt).format('DD/MM/YYYY')}
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      {email.valid ? (
                        <Avatar className={classes.iconSuccess}>
                          <DoneIcon />
                        </Avatar>
                      ) : (
                        <Avatar className={classes.iconDanger}>
                          <ErrorIcon />
                        </Avatar>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </PerfectScrollbar>
          <TablePagination
            labelRowsPerPage="E-mails por página"
            backIconButtonProps={{
              'aria-label': 'Anterior'
            }}
            component="div"
            count={emails.length}
            nextIconButtonProps={{
              'aria-label': 'Próxima'
            }}
            onChangePage={this.handleChangePage}
            onChangeRowsPerPage={this.handleChangeRowsPerPage}
            page={page}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </PortletContent>
      </Portlet>
    );
  }
}

EmailsTable.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  onSelect: PropTypes.func,
  onShowDetails: PropTypes.func,
  emails: PropTypes.array.isRequired
};

EmailsTable.defaultProps = {
  emails: [],
  onSelect: () => {},
  onShowDetails: () => {}
};

export default withStyles(styles)(EmailsTable);
