import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import HotelItem from '../components/HotelItem';
import ListFilters from '../components/ListFilters';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    margin: '20px 20px 20px 0px',
  },
  hotelList: {
    display: 'flex',
    flexDirection: 'column',
    margin: '20 20 0 0',
  },
});

const HotelsList = props => {
  const {
    classes,
    hotels: { hotels },
  } = props;
  return hotels ? (
    <div className={classes.root}>
      <ListFilters />
      <div className={classes.hotelList}>
        {hotels.map(hotel => <HotelItem hotel={hotel} key={hotel.name} />)}
      </div>
    </div>
  ) : (
    <div> </div>
  );
};

HotelsList.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({ hotels }) => ({
  hotels,
});

export default connect(mapStateToProps, null)(withStyles(styles)(HotelsList));
