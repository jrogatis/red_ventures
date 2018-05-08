import React from 'react';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import { Typography, Grid } from 'material-ui';
import Stars from './Stars';
import HotelCardActions from './HotelCardActions';

const styles = theme => ({
  hotelName: {
    color: theme.palette.primary.light,
  },
});

const HotelCardContent = props => {
  const { hotel, showGraph, classes } = props;
  return (
    <Grid container direction="column" wrap="nowrap">
      <Stars rate={hotel.rate} />
      <Typography className={classes.hotelName} variant="headline">
        {hotel.name}
      </Typography>
      <Typography paragraph variant="subheading" color="textSecondary">
        {hotel.description}
      </Typography>
      <HotelCardActions showGraph={() => showGraph()} />
    </Grid>
  );
};

HotelCardContent.propTypes = {
  classes: PropTypes.object.isRequired,
  showGraph: PropTypes.func.isRequired,
};

export default withStyles(styles)(HotelCardContent);
