import React from 'react';
import { withStyles } from 'material-ui/styles';
import HotelCardActions from './HotelCardActions';
import { Grid } from 'material-ui';
import PropTypes from 'prop-types';
import HotelPriceItem from './HotelPriceItem';
import HotelCardContent from './HotelCardContent';

const styles = theme => ({});

const HotelCard = props => {
  const { hotel, days } = props;
  return (
    <Grid container direction="row" wrap="nowrap" alignItems="center">
      <Grid item xs={10}>
        <Grid container direction="column">
          <HotelCardContent hotel={hotel} />
          <HotelCardActions />
        </Grid>
      </Grid>
      <Grid item xs={2}>
        <HotelPriceItem price={hotel.price} days={days} />
      </Grid>
    </Grid>
  );
};

HotelCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HotelCard);
