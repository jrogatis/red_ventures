import React, { Component } from 'react';
import { Typography, Paper, Grid } from 'material-ui';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import DatePicker from './DatePicker';

const styles = theme => ({
  root: {
    marginTop: '-10%',
    marginBottom: '2%',
    borderRadius: '5px',
    padding: '4% 8%',
    boxShadow: '-1px -22px 47px 4px rgba(0,0,0,0.3)',
  },
  text: {
    padding: '0 12% 10% 12%',
    [theme.breakpoints.down('xs')]: {
      fontSize: '18px',
    },
  },
});

class DateSelector extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container direction="row" alignItems="center" justify="center">
        <Paper className={classes.root}>
          <Grid
            container
            direction="column"
            alignItems="center"
            justify="space-around"
            wrap="nowrap"
          >
            <Typography align="center" variant="headline" className={classes.text} noWrap>
              Select the dates to stay in Charlotte
            </Typography>
            <DatePicker />
          </Grid>
        </Paper>
      </Grid>
    );
  }
}

DateSelector.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DateSelector);
