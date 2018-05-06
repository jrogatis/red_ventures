import React from 'react';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import { CardContent } from 'material-ui/Card';
import { Typography, Grid } from 'material-ui';
import Stars from './Stars';

const styles = theme => ({});

const HotelCardContent = props => {
  const { hotel } = props;
  return (
    <CardContent>
      <Grid container direction="row" wrap="nowrap">
        <Grid container direction="column">
          <Stars rate={hotel.rate} />
          <Typography style={{ color: '#F98100' }} variant="headline">
            {hotel.name}
          </Typography>
          <Typography paragraph variant="subheading" color="textSecondary">
            {hotel.description}
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
  );
};

HotelCardContent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HotelCardContent);
