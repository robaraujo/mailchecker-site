import React, { Component } from 'react';

// Externals
import PropTypes from 'prop-types';

// Material helpers
import { withStyles, Typography } from '@material-ui/core';

// Material components
import { Button } from '@material-ui/core';

// Material icons
import { ArrowUpward } from '@material-ui/icons';

// Component styles
import styles from './styles';

class EmailsToolbar extends Component {
  onExport() {
    let emailsStr = '';
    console.log(this.props.selectedEmails);
    this.props.selectedEmails.forEach(email => {
      emailsStr += email.email + '\n';
    });

    var element = document.createElement('a');
    element.setAttribute(
      'href',
      'data:text/plain;charset=utf-8,' + encodeURIComponent(emailsStr)
    );
    element.setAttribute('download', 'emails.txt');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  render() {
    const { classes, selectedEmails } = this.props;

    return (
      <div className={classes.toolbarContainer}>
        <Typography variant="body" className={classes.selectedText}>
          <b>{selectedEmails.length}</b> e-mail(s) selecionado(s)
        </Typography>
        <Button
          onClick={() => this.onExport()}
          disabled={!selectedEmails.length}
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
