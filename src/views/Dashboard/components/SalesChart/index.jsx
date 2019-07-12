import React, { Component } from 'react';

// Externals
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import { Button } from '@material-ui/core';

// Material icons
import {
  ArrowDropDown as ArrowDropDownIcon,
  ArrowRight as ArrowRightIcon
} from '@material-ui/icons';

// Shared components
import {
  Portlet,
  PortletHeader,
  PortletLabel,
  PortletToolbar,
  PortletContent,
  PortletFooter
} from 'components';

// Chart configuration
import { options } from './chart';
import palette from '../../../../theme/palette';

// Component styles
import styles from './styles';

class SalesChart extends Component {
  prepareData() {
    this.props.emails.forEach(email => {});

    // Chart data
    return {
      labels: ['1 Aug', '2 Aug', '3 Aug', '4 Aug', '5 Aug', '6 Aug'],
      datasets: [
        {
          label: 'Essa semana',
          backgroundColor: palette.primary.main,
          data: [18, 5, 19, 27, 29, 19, 20]
        },
        {
          label: 'Semana passada',
          backgroundColor: palette.common.neutral,
          data: [11, 20, 12, 29, 30, 25, 13]
        }
      ]
    };
  }

  render() {
    const { classes, className, emails, ...rest } = this.props;
    const rootClassName = classNames(classes.root, className);
    const data = this.prepareData();

    return (
      <Portlet {...rest} className={rootClassName}>
        <PortletHeader noDivider>
          <PortletLabel title="Últimas validações" />
          <PortletToolbar>
            <Button
              className={classes.dropdownButton}
              size="small"
              variant="text">
              Útimos 7 days <ArrowDropDownIcon />
            </Button>
          </PortletToolbar>
        </PortletHeader>
        <PortletContent>
          <div className={classes.chartWrapper}>
            <Bar data={data} options={options} />
          </div>
        </PortletContent>
        <PortletFooter className={classes.portletFooter}>
          <Button color="primary" size="small" variant="text">
            Overview <ArrowRightIcon />
          </Button>
        </PortletFooter>
      </Portlet>
    );
  }
}

SalesChart.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SalesChart);
