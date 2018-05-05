import React from 'react';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import { Typography, Button, Grid, Paper } from 'material-ui';
import Stars from './Stars';
import PropTypes from 'prop-types';

const styles = theme => ({
  root: {
    borderLeft: '1px solid #adadad',
    paddingLeft: '3%',
  },
});

const HotelPriceItem = props => {
  const { price, days, classes } = props;
  return (
    <Grid item xs={2} className={classes.root}>
      <Grid
        container
        direction="column"
        justify="space-around"
        alignItems="center"
        alignContent="center"
        wrap="nowrap"
      >
        <Typography> Total {days} nights </Typography>
        <Typography> {days * price} </Typography>
        <Typography> Per night </Typography>
        <Typography> {price} </Typography>
      </Grid>
    </Grid>
  );
};

HotelPriceItem.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(HotelPriceItem);
