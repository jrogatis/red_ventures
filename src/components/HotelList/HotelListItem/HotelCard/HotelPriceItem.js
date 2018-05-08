import React from 'react';
import { withStyles } from 'material-ui/styles';
import { Typography, Grid } from 'material-ui';
import PropTypes from 'prop-types';

import { valueFormated } from '../../../../utils';

const styles = theme => ({
  root: {
    borderLeft: '1px solid #adadad',
    paddingLeft: '5%',
    marginLeft: '3%',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'space-around',
      borderLeft: '0px',
      borderTop: '1px solid #adadad',
    },
  },
  valueTotal: {
    color: '#79BD1A',
  },
  value: {
    color: theme.palette.primary.light,
  },
});

const total = props => {
  const { price, days, classes } = props;
  return (
    <Grid container direction="column">
      <Typography noWrap gutterBottom variant="subheading" color="textSecondary">
        Total {days} nights
      </Typography>
      <Typography noWrap className={classes.valueTotal} variant="title" paragraph>
        $ {valueFormated(days * price)}
      </Typography>
    </Grid>
  );
};

const perNight = props => {
  const { price, classes } = props;
  return (
    <Grid container direction="column">
      <Typography noWrap gutterBottom variant="subheading" color="textSecondary">
        Per night
      </Typography>
      <Typography noWrap paragraph className={classes.value}>
        $ {valueFormated(price)}
      </Typography>
    </Grid>
  );
};

const HotelPriceItem = props => {
  const { classes } = props;
  return (
    <Grid
      container
      direction="column"
      wrap="nowrap"
      className={classes.root}
      alignItems="flex-start"
      spacing={16}
      zeroMinWidth
    >
      <Grid item>{total(props)}</Grid>
      <Grid item>{perNight(props)}</Grid>
    </Grid>
  );
};

HotelPriceItem.propTypes = {
  classes: PropTypes.object.isRequired,
  price: PropTypes.number.isRequired,
  days: PropTypes.number.isRequired,
};

export default withStyles(styles)(HotelPriceItem);
