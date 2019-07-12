import React, { Component } from 'react';

// Externals
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import { Typography, Button, LinearProgress } from '@material-ui/core';

// Shared components
import { Portlet, PortletContent, PortletFooter } from 'components';

// Component styles
import styles from './styles';
import { AvatarOrInitials } from '../../../../components';

class AccountProfile extends Component {
  render() {
    const { classes, className, user, ...rest } = this.props;

    const rootClassName = classNames(classes.root, className);

    return (
      <Portlet {...rest} className={rootClassName}>
        <PortletContent>
          <div className={classes.details}>
            <div className={classes.info}>
              <Typography variant="h2">
                {user.firstName + ' ' + user.lastName}
              </Typography>
              <Typography className={classes.dateText} variant="body1">
                4:32PM (GMT-4)
              </Typography>
            </div>
            <AvatarOrInitials className={classes.avatar} user={user} />
          </div>
        </PortletContent>
        <PortletFooter>
          <Button
            onClick={() => alert('TODO')}
            className={classes.uploadButton}
            color="primary"
            variant="text">
            Enviar imagem
          </Button>
        </PortletFooter>
      </Portlet>
    );
  }
}

AccountProfile.propTypes = {
  user: PropTypes.object.isRequired,
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AccountProfile);
