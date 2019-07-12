import React, { Component } from 'react';

// Externals
import PropTypes from 'prop-types';

// Material components
import { withStyles, Typography, Button } from '@material-ui/core';
import { CloudUpload } from '@material-ui/icons';

// Component styles
import styles from './styles';

class SelectFile extends Component {
  state = {
    error: null
  };

  hasExtension(filename) {
    const exts = ['.txt', '.csv'];
    return new RegExp('(' + exts.join('|').replace(/\./g, '\\.') + ')$').test(
      filename
    );
  }

  /**
   * User select file
   * convert to array of emails and send to server
   */
  onChangeHandler = evt => {
    let reader = new FileReader();
    let file = evt.target.files[0];

    if (!this.hasExtension(file.name)) {
      return this.setState({ error: 'Formato inválido.' });
    }

    reader.onload = evt => {
      if (evt.target.readyState !== 2) return;
      if (evt.target.error) {
        return this.setState({ error: 'Error while reading file' });
      }

      const list = evt.target.result.split('\n');
      this.props.onSubmit(list);
    };

    this.setState({ error: null });
    reader.readAsText(file);
  };

  render() {
    const { classes } = this.props;
    const { error } = this.state;

    return (
      <div className={this.props.className}>
        <Typography variant="h2">Importe sua lista aqui</Typography>
        <Typography variant="body1">
          Arraste e solte um arquivo aqui (CSV, TXT até 30 MB) ou selecione uma
          integração como uma fonte
        </Typography>
        <div className={classes.iconWrapper}>
          <CloudUpload className={classes.icon} />
        </div>
        <div>
          {!!error && (
            <Typography variant="body2" className={classes.danger}>
              {error}
            </Typography>
          )}
          <Button
            variant="contained"
            color="primary"
            className={classes.button}>
            Selecione o arquivo
          </Button>
        </div>
        <input
          className={classes.inputUpload}
          type="file"
          name="file"
          onChange={this.onChangeHandler}
          onClick={event => (event.target.value = null)}
        />
      </div>
    );
  }
}

SelectFile.propTypes = {
  listValidated: PropTypes.array,
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  onSubmit: PropTypes.func
};

SelectFile.defaultProps = {
  onSubmit: () => {}
};

export default withStyles(styles)(SelectFile);
