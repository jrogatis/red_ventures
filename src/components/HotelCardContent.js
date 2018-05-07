import React from 'react';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import { Typography, Grid } from 'material-ui';
import Stars from './Stars';
import HotelCardActions from './HotelCardActions';

const styles = theme => ({});

const HotelCardContent = props => {
  const { hotel } = props;
  return (
    <Grid container direction="column" wrap="nowrap">
      <Stars rate={hotel.rate} />
      <Typography style={{ color: '#F98100' }} variant="headline">
        {hotel.name}
      </Typography>
      <Typography paragraph variant="subheading" color="textSecondary">
        {hotel.description}
      </Typography>
      <HotelCardActions />
    </Grid>
  );
};

HotelCardContent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HotelCardContent);
