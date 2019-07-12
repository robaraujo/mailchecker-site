import React from 'react';
import {
  withStyles,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  CircularProgress,
  LinearProgress
} from '@material-ui/core';

import {
  DoneOutline as DoneIcon,
  Close as ErrorIcon
} from '@material-ui/icons';

import PropTypes from 'prop-types';

import pallet from '../../theme/palette';

// Component styles
const styles = theme => {
  return {
    root: {
      textAlign: 'center',
      padding: '20px 0'
    }
  };
};

const ListEmails = props => {
  const { classes, emails } = props;

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
    <List className={classes.root} dense={true}>
      {emails.map(email => (
        <ListItem>
          <ListItemAvatar>
            <Avatar
              style={{
                backgroundColor: pallet[email.valid ? 'success' : 'danger'].main
              }}>
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
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ListEmails);
