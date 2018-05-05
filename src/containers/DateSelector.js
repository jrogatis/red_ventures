import React, { Component } from 'react';
import { Typography, Paper, Grid } from 'material-ui';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import DatePicker from '../components/DatePicker';

const styles = theme => ({
  root: {
    marginTop: '-20%',
    marginBottom: '2%',
  },
  paper: {
    borderRadius: '5px',
    padding: '4% 10%',
    boxShadow: '-1px -22px 47px 4px rgba(0,0,0,0.3)',
  },
  text: {
    paddingBottom: '4%',
    [theme.breakpoints.down('sm')]: {
      fontSize: '18px',
    },
  },
});

class DateSelector extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container direction="row" alignItems="center" justify="center" className={classes.root}>
        <Paper className={classes.paper}>
          <Typography align="center" variant="headline" className={classes.text}>
            Select the dates to stay in Charlotte
          </Typography>
          <DatePicker />
        </Paper>
      </Grid>
    );
  }
}

DateSelector.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DateSelector);
