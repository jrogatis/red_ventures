import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'rc-slider';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';

import { filterPriceRange } from '../../../actions';
import { valueFormated } from '../../../utils';

import 'rc-slider/assets/index.css';
const Range = Slider.Range;

const styles = theme => ({
  value: {
    color: theme.palette.primary.light,
  },
  slider: {
    margin: '0 20 20 20',
    width: 200,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 50,
  },
});

const RangeValueText = props => {
  const { label, value, direction, classes } = props;
  return (
    <Grid container direction="column" justify="flex-start">
      <Typography color="textSecondary" align={direction}>
        {label}
      </Typography>
      <Typography className={classes.value} align={direction}>
        $ {valueFormated(value)}
      </Typography>
    </Grid>
  );
};

const PriceSlider = props => {
  const {
    classes,
    hotels: { minPrice, maxPrice, minFilter, maxFilter },
    filterPriceRange,
  } = props;

  const handleChange = minMax => filterPriceRange(minMax);

  return (
    <div>
      <Typography align="left" color="textSecondary">
        Price Range per night
      </Typography>
      <Range
        className={classes.slider}
        onChange={minMax => handleChange(minMax)}
        min={minPrice - 40}
        max={maxPrice + 40}
        allowCross={false}
        trackStyle={[{ backgroundColor: '#F98100' }, { backgroundColor: '#F98100' }]}
        handleStyle={[
          { backgroundColor: 'white', borderColor: '#F98100' },
          { backgroundColor: 'white', borderColor: '#F98100' },
        ]}
        railStyle={{ backgroundColor: '#F98100' }}
        step={0.01}
        defaultValue={[minFilter, maxFilter]}
      />
      <Grid container direction="row" justify="space-between" wrap="nowrap">
        <RangeValueText direction="left" classes={classes} value={minFilter} label={'Min'} />
        <RangeValueText direction="right" classes={classes} value={maxFilter} label={'Max'} />
      </Grid>
    </div>
  );
};

PriceSlider.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({ hotels }) => ({
  hotels,
});

export default connect(mapStateToProps, { filterPriceRange })(withStyles(styles)(PriceSlider));
