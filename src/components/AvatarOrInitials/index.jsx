import React from 'react';
import { Avatar } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  initials: {
    border: '3px solid #f2f2f2',
    boxShadow:
      '0 2px 6px 0 rgba(0, 0, 0, 0.2), 0 1px 19px 0 rgba(0, 0, 0, 0.19)',
    borderRadius: '50%',
    fontSize: '45px',
    lineHeight: '54px',
    fontFamily: '"Lucida Console", Monaco, monospace',
    fontWeight: 'bold',
    padding: '20px',
    color: theme.palette.primary.main
  }
});

const AvatarOrInitials = props => {
  const { classes, className, user, ...rest } = props;

  if (user.img) {
    return (
      <Avatar alt={user.firstName} className={classes.avatar} src={user.img} />
    );
  }

  let letters = user.firstName.charAt(0) + user.lastName.charAt(0);
  return <div className={classes.initials}>{letters}</div>;
};

AvatarOrInitials.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AvatarOrInitials);
