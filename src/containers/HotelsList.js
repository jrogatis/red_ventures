import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import HotelItem from '../components/HotelItem';
const styles = theme => ({});

const HotelsList = props => {
  const {
    hotels: { hotels },
  } = props;
  return hotels ? (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        marginTop: 20,
      }}
    >
      aqui vao os ................................
      <div
        style={{
          display: 'flex',
          alignContent: 'center',
          flexDirection: 'column',
        }}
      >
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

export default connect(mapStateToProps)(withStyles(styles)(HotelsList));
