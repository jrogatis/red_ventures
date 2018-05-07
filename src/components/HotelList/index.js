import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import { Grid, Typography } from 'material-ui';
import moment from 'moment';

import HotelItem from './HotelListItem';
import ListFilters from './Filters';

const styles = theme => ({
  root: {
    margin: '20px 20px 20px 0px',
    [theme.breakpoints.down('sm')]: {
      margin: '20px',
    },
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
    <Grid container direction="column" wrap="nowrap" alignItems="center">
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
        <Grid item xs md={3} lg={2} hidden={{ smDown: true }}>
          <ListFilters />
        </Grid>
        <Grid item xs={12} sm={11} md={9} lg={10}>
          <Grid container className={classes.hotelList}>
            {hotels.map(hotel => (
              <Grid item xs={12}>
                <HotelItem
                  hotel={hotel}
                  key={hotel.name}
                  days={moment(dateRange.to).diff(dateRange.from, 'days')}
                />
              </Grid>
            ))}
          </Grid>
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
