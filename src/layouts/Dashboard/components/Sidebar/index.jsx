import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

// Externals
import classNames from 'classnames';
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from '@material-ui/core';

// Material icons
import {
  DashboardOutlined as DashboardIcon,
  AccountBoxOutlined as AccountBoxIcon,
  SettingsOutlined as SettingsIcon,
  Email
} from '@material-ui/icons';

// Component styles
import styles from './styles';
import { AvatarOrInitials } from '../../../../components';

class Sidebar extends Component {
  render() {
    const { classes, className, auth } = this.props;

    const rootClassName = classNames(classes.root, className);

    return (
      <nav className={rootClassName}>
        <div className={classes.logoWrapper}>
          <Link className={classes.logoLink} to="/">
            <img
              alt="MailChecker logo"
              className={classes.logoImage}
              src="/images/logos/brainalytica_logo.svg"
            />
          </Link>
        </div>
        <Divider className={classes.logoDivider} />
        <div className={classes.profile}>
          <Link to="/account">
            <AvatarOrInitials user={auth.user} />
          </Link>
          <Typography className={classes.nameText} variant="h6">
            {auth.user.firstName + ' ' + auth.user.lastName}
          </Typography>
          <Typography className={classes.bioText} variant="caption">
            Usuário
          </Typography>
        </div>
        <Divider className={classes.profileDivider} />
        <List component="div" disablePadding>
          <ListItem
            activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={NavLink}
            to="/dashboard">
            <ListItemIcon className={classes.listItemIcon}>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary="Dashboard"
            />
          </ListItem>
          <ListItem
            activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={NavLink}
            to="/email-validate">
            <ListItemIcon className={classes.listItemIcon}>
              <Email />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary="Validar e-mail"
            />
          </ListItem>
          <ListItem
            activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={NavLink}
            to="/email-validate-mass">
            <ListItemIcon className={classes.listItemIcon}>
              <Email />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary="Validação em remessa"
            />
          </ListItem>
          <ListItem
            activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={NavLink}
            to="/emails">
            <ListItemIcon className={classes.listItemIcon}>
              <Email />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary="E-mails"
            />
          </ListItem>
          <ListItem
            activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={NavLink}
            to="/account">
            <ListItemIcon className={classes.listItemIcon}>
              <AccountBoxIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary="Account"
            />
          </ListItem>
        </List>
      </nav>
    );
  }
}

Sidebar.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Sidebar);
