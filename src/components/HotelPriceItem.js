import React from 'react';
import { withStyles } from 'material-ui/styles';
import { Typography, Grid } from 'material-ui';
import PropTypes from 'prop-types';
import { valueFormated } from '../utils';

const styles = theme => ({
  root: {
    borderLeft: '1px solid #adadad',
    paddingRight: '3%',
  },
  valueTotal: {
    color: '#79BD1A',
  },
  value: {
    color: theme.palette.primary.light,
  },
});

const HotelPriceItem = props => {
  const { price, days, classes } = props;
  return (
    <Grid container direction="column" wrap="nowrap" className={classes.root} alignItems="flex-end">
      <Typography noWrap gutterBottom variant="subheading" color="textSecondary">
        Total {days} nights
      </Typography>
      <Typography noWrap className={classes.valueTotal} variant="title" paragraph>
        $ {valueFormated(days * price)}
      </Typography>
      <Typography noWrap gutterBottom variant="subheading" color="textSecondary">
        Per night
      </Typography>
      <Typography noWrap paragraph className={classes.value}>
        $ {valueFormated(price)}
      </Typography>
    </Grid>
  );
};

HotelPriceItem.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(HotelPriceItem);
