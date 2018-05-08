import React from 'react';
import { withStyles } from 'material-ui/styles';
import { Grid } from 'material-ui';
import PropTypes from 'prop-types';
import HotelPriceItem from './HotelPriceItem';
import HotelCardContent from './HotelCardContent';

const styles = theme => ({
  root: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'center',
      justify: 'space-around',
    },
    padding: '2%',
  },
});

const HotelCard = props => {
  const { hotel, days, classes, showGraph } = props;
  return (
    <Grid container direction="row" wrap="nowrap" alignItems="center" className={classes.root}>
      <Grid item xs sm={9} md={9} lg={10}>
        <HotelCardContent hotel={hotel} showGraph={() => showGraph()} />
      </Grid>
      <Grid item xs md lg>
        <HotelPriceItem price={hotel.price} days={days} />
      </Grid>
    </Grid>
  );
};

HotelCard.propTypes = {
  classes: PropTypes.object.isRequired,
  showGraph: PropTypes.func.isRequired,
  hotel: PropTypes.object.isRequired,
  days: PropTypes.number.isRequired,
};

export default withStyles(styles)(HotelCard);
