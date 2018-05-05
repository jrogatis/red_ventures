import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from 'rc-slider';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import { filterPriceRange } from '../actions';
import 'rc-slider/assets/index.css';
const Range = Slider.Range;

const styles = theme => ({
  slider: {
    margin: 20,
    width: 200,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 50,
  },
});

class PriceSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      min: Math.round(props.hotels.minPrice) || 100,
      max: Math.round(props.hotels.maxPrice) || 800,
    };
  }

  handleChange(minMax) {
    this.setState({ min: minMax[0], max: minMax[1] });
    this.props.filterPriceRange(minMax);
  }

  render() {
    const { classes, hotels } = this.props;
    const { min, max } = this.state;
    return (
      <div>
        <Typography align="center"> Price Range per night </Typography>
        <Range
          className={classes.slider}
          onChange={minMax => this.handleChange(minMax)}
          min={hotels.minPrice}
          max={hotels.maxPrice}
          allowCross={false}
          trackStyle={[{ backgroundColor: '#F98100' }, { backgroundColor: '#F98100' }]}
          handleStyle={[
            { backgroundColor: '#F98100', borderColor: '#F98100' },
            { backgroundColor: '#F98100', borderColor: '#F98100' },
          ]}
          railStyle={{ backgroundColor: '#F98100' }}
          step={1}
          defaultValue={[hotels.minPrice, hotels.maxPrice]}
        />
        <Grid container direction="row" justify="space-between">
          <TextField label="Min" className={classes.textField} value={min} />
          <TextField label="Max" className={classes.textField} value={max} />
        </Grid>
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

export default connect(mapStateToProps, { filterPriceRange })(withStyles(styles)(PriceSlider));
