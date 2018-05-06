import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import HotelItem from '../components/HotelItem';
import ListFilters from '../components/ListFilters';
import { Grid, Typography } from 'material-ui';
import moment from 'moment';

const styles = theme => ({
  root: {
    margin: '20px 20px 20px 0px',
  },
  hotelList: {
    margin: '20 20 0 0px',
  },
});

const HotelsList = props => {
  const {
    classes,
    hotels: { hotels },
    dateRanges: { dateRange },
  } = props;

  return hotels && dateRange ? (
    <Grid>
      <Typography align="center" variant="display1">
        Best choices between {moment(dateRange.from).format('MMM DD')} and {''}
        {moment(dateRange.to).format('MMM DD')}
      </Typography>
      <Grid
        container
        className={classes.root}
        direction="row"
        wrap="nowrap"
        alignItems="flex-start"
        alignContent="center"
      >
        <Grid item xs={3}>
          <ListFilters />
        </Grid>
        <Grid item xs={8} className={classes.hotelList}>
          {hotels.map(hotel => (
            <HotelItem
              hotel={hotel}
              key={hotel.name}
              days={moment(dateRange.to).diff(dateRange.from, 'days')}
            />
          ))}
        </Grid>
      </Grid>
    </Grid>
  ) : (
    <div> </div>
  );
};

HotelsList.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({ hotels, dateRanges }) => ({
  hotels,
  dateRanges,
});

export default connect(mapStateToProps, null)(withStyles(styles)(HotelsList));
