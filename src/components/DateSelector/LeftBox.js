import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import moment from 'moment';
import { Button, Grid, Tooltip } from 'material-ui';
import { connect } from 'react-redux';

import DateFieldsText from './DateFieldsText';
import { fetchHotels } from '../../actions';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    borderRadius: '25px',
    textTransform: 'none',
    backgroundColor: 'transparent',
    color: theme.palette.primary.light,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.palette.primary.light,
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
      color: 'white',
    },
  },
  left: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'row',
    },
  },
});

const tips = (from, to) => {
  if (!from && !to) {
    return 'Please select a check-in and a check-out dates';
  } else if (!to) {
    return 'Please select a check-out';
  } else if (!from) {
    return 'Please select a check-in';
  }
  return '';
};

const LeftBox = props => {
  const { classes, from, to, fetchHotels } = props;
  return (
    <Grid
      container
      justify="center"
      direction="column"
      className={classes.left}
      wrap="nowrap"
      alignItems="center"
    >
      <Grid item xs>
        <Grid container justify="center" direction="column" className={classes.left}>
          <Grid container justify="center" direction="column" className={classes.left}>
            <DateFieldsText
              id="CHECK-IN"
              label="CHECK-IN"
              value={moment(from).format('MMM DD YYYY')}
            />
            <DateFieldsText
              id="CHECK-OUT"
              label="CHECK-OUT"
              value={moment(to).format('MMM DD YYYY')}
            />
          </Grid>
        </Grid>
        <Grid item xs>
          <Grid container justify="center" direction="column" alignItems="center">
            <Grid item>
              <Tooltip id="tooltip-fab" title={tips(from, to)}>
                <Button
                  variant="flat"
                  className={classes.button}
                  onClick={from && to ? () => fetchHotels() : null}
                >
                  Search hotels
                </Button>
              </Tooltip>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

LeftBox.propTypes = {
  classes: PropTypes.object.isRequired,
  fetchHotels: PropTypes.func.isRequired,
};

const mapStateToProps = ({ hotels, dateRanges }) => ({
  hotels,
});

export default connect(mapStateToProps, { fetchHotels })(withStyles(styles)(LeftBox));
