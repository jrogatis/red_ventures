import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from 'rc-slider';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import 'rc-slider/assets/index.css';
const Range = Slider.Range;

const styles = theme => ({
  slider: {
    margin: 20,
    width: 200,
  },
});

class PriceSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      min: 100,
      max: 800,
    };
  }
  onMinChange = e => {
    this.setState({
      min: +e.target.value || 100,
    });
  };

  onMaxChange = e => {
    this.setState({
      max: +e.target.value || 800,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Typography align="center"> Price Range per night </Typography>
        <Range
          className={classes.slider}
          onChange={this.handleChange}
          min={this.state.min}
          max={this.state.max}
          allowCross={false}
          trackStyle={[{ backgroundColor: '#F98100' }, { backgroundColor: '#F98100' }]}
          handleStyle={[{ backgroundColor: '#F98100' }, { backgroundColor: '#F98100' }]}
          railStyle={{ backgroundColor: '#F98100' }}
          step={100}
          defaultValue={[200, 600]}
        />
      </div>
    );
  }
}

PriceSlider.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({ hotels }) => ({
  hotels,
});

export default connect(mapStateToProps, null)(withStyles(styles)(PriceSlider));
