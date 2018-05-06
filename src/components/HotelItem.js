import React from 'react';
import { withStyles } from 'material-ui/styles';
import { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import { Typography, Button, Grid, Paper } from 'material-ui';
import Stars from './Stars';
import PropTypes from 'prop-types';
import HotelPriceItem from './HotelPriceItem';

const styles = theme => ({
  root: {},
  card: {
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    marginLeft: theme.spacing.unit + 40,
  },
  content: {},
  image: {
    height: 200,
    width: 200,
    minWidth: 200,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: '5px',
    float: 'left',
    marginLeft: -40,
    boxShadow:
      '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
  },
  buttonPrice: {
    margin: theme.spacing.unit,
    borderRadius: '25px',
    textTransform: 'none',
    backgroundColor: '#79BD1A',
    color: 'white',
  },
  buttonBook: {
    margin: theme.spacing.unit,
    borderRadius: '25px',
    textTransform: 'none',
    backgroundColor: 'transparent',
    color: theme.palette.primary,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.palette.primary,
  },
});

const HotelCardActions = props => {
  const { classes } = props;
  return (
    <CardActions>
      <Button size="small" className={classes.buttonBook}>
        Book Now
      </Button>
      <Button size="small" className={classes.buttonPrice}>
        Price history
      </Button>
    </CardActions>
  );
};

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
const HotelCard = props => {
  const { classes, hotel, days } = props;
  return (
    <Grid container direction="row" wrap="nowrap" alignItems="center">
      <Grid item xs={10}>
        <Grid container direction="column">
          <HotelCardContent classes={classes} hotel={hotel} />
          <HotelCardActions classes={classes} />
        </Grid>
      </Grid>
      <Grid item xs={2}>
        <HotelPriceItem price={hotel.price} days={days} />
      </Grid>
    </Grid>
  );
};

const HotelItem = props => {
  const { classes, hotel, days } = props;
  return (
    <Paper elevation={4} className={classes.card}>
      <Grid container key={hotel.name} direction="row" wrap="nowrap">
        <CardMedia className={classes.image} image={hotel.image} title={hotel.name} />
        <HotelCard hotel={hotel} classes={classes} days={days} />
      </Grid>
    </Paper>
  );
};

HotelItem.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(HotelItem);
