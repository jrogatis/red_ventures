import React from 'react';
import { withStyles } from 'material-ui/styles';
import { CardMedia } from 'material-ui/Card';
import { Grid, Paper } from 'material-ui';
import PropTypes from 'prop-types';
import HotelCard from './HotelCard';

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    marginLeft: theme.spacing.unit + 40,
  },
  content: {},
  image: {
    height: 200,
    width: 200,
    minWidth: 200,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: '5px',
    float: 'left',
    marginLeft: -40,
    boxShadow:
      '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
  },
});

const HotelItem = props => {
  const { classes, hotel, days } = props;
  return (
    <Paper elevation={4} className={classes.root}>
      <Grid container key={hotel.name} direction="row" wrap="nowrap">
        <CardMedia className={classes.image} image={hotel.image} title={hotel.name} />
        <HotelCard hotel={hotel} days={days} />
      </Grid>
    </Paper>
  );
};

HotelItem.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(HotelItem);
