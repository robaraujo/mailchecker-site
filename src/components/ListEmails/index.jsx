import React from 'react';
import {
  withStyles,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  LinearProgress
} from '@material-ui/core';

import {
  DoneOutline as DoneIcon,
  Close as ErrorIcon
} from '@material-ui/icons';

import PropTypes from 'prop-types';

// Component styles
const styles = theme => {
  return {
    root: {
      textAlign: 'center',
      padding: '20px 0'
    },
    successItem: {
      backgroundColor: theme.palette.success.main,
      width: '35px',
      height: '35px'
    },
    errorItem: {
      backgroundColor: theme.palette.danger.main,
      width: '35px',
      height: '35px'
    }
  };
};

const ListEmails = props => {
  const { classes, emails, className } = props;

  if (!emails) {
    return (
      <div className={classes.root}>
        <LinearProgress />
      </div>
    );
  }
  if (!emails) {
    return <div className={classes.root}>Nenhum e-mail encontrado</div>;
  }

  return (
    <List className={className} dense={true}>
      {emails.map(email => (
        <ListItem>
          <ListItemAvatar>
            <Avatar
              className={email.valid ? classes.successItem : classes.errorItem}>
              {email.valid ? <DoneIcon /> : <ErrorIcon />}
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={email.email} />
        </ListItem>
      ))}
    </List>
  );
};

ListEmails.propTypes = {
  emails: PropTypes.array,
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ListEmails);
