import React from 'react';
import { withStyles } from 'material-ui/styles';
import { Typography, Grid } from 'material-ui';
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
        <Typography noWrap> Total {days} nights </Typography>
        <Typography noWrap> {days * price} </Typography>
        <Typography noWrap> Per night </Typography>
        <Typography noWrap> {price} </Typography>
      </Grid>
    </Grid>
  );
};

HotelPriceItem.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(HotelPriceItem);
