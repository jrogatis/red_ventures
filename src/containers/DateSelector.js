import React, { Component } from 'react';
import { Typography, Paper, Grid } from 'material-ui';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import DatePicker from '../components/DatePicker';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: '5px',
    zIndex: 9999,
  }),
  text: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '18px',
    },
  },
});

class DateSelector extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          marginTop: -200,
        }}
      >
        <Paper className={classes.root} elevation={1}>
          <Typography align="center" variant="display1" className={classes.text}>
            Select the dates to stay in Charlotte
          </Typography>

          <DatePicker />
        </Paper>
      </div>
    );
  }
}

DateSelector.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DateSelector);
