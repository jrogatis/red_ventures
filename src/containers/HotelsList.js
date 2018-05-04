import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import HotelItem from '../components/HotelItem';
const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: '5px',
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
          {hotels.map(hotel => <HotelItem hotel={hotel} />)}
        </div>
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
