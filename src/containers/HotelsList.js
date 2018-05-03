import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: '5px',
    zIndex: 9999,
  }),
});

class HotelsList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      hotels: { hotels },
    } = this.props;
    console.log('hotels', hotels);
    return hotels ? (
      <div style={{ zIndex: 9999, 'background-color': 'red' }}>
        <ul>
          {hotels.map(hotel => (
            <li key={hotel.name}>
              {' '}
              <div> {hotel.description}</div>{' '}
            </li>
          ))}
        </ul>
      </div>
    ) : (
      <div> </div>
    );
  }
}

HotelsList.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({ hotels }) => ({
  hotels,
});

export default connect(mapStateToProps)(withStyles(styles)(HotelsList));
