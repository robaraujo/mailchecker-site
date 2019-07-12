import React from 'react';
import { withStyles, Typography } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';
import PropTypes from 'prop-types';

import { options } from '../../helpers/chartjs';
import palette from '../../theme/palette';

// Component styles
const styles = () => ({
  root: {},
  wrapper: {
    position: 'relative',
    margin: 'auto'
  },
  title: {
    position: 'absolute',
    width: '100%',
    top: 'calc(50% - 20px)'
  }
});

const DoughnutEmails = props => {
  // count valids and invalids emails
  let valids = 0;
  let invalids = 0;
  props.emails.forEach(mail => {
    if (mail.valid) {
      valids++;
    } else {
      invalids++;
    }
  });

  // Chart data
  const data = {
    datasets: [
      {
        data: [valids, invalids],
        backgroundColor: [palette.success.main, palette.danger.main],
        borderWidth: 2,
        borderColor: palette.common.white,
        hoverBorderColor: palette.common.white
      }
    ],
    labels: ['Valid', 'Invalid']
  };

  return (
    <div
      className={props.classes.wrapper}
      style={{ width: props.size, height: props.size }}>
      <Typography variant="body1" className={props.classes.title}>
        <b>{props.emails.length}</b> <br />
        Emails
      </Typography>
      <Doughnut
        width={props.size}
        height={props.size}
        data={data}
        options={options}
      />
    </div>
  );
};

DoughnutEmails.propTypes = {
  emails: PropTypes.array,
  size: PropTypes.number
};
DoughnutEmails.defaultProps = {
  size: 130
};

export default withStyles(styles)(DoughnutEmails);
