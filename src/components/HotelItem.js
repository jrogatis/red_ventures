import React from 'react';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import { Typography, Button, Grid, Paper } from 'material-ui';
import Stars from './Stars';
import PropTypes from 'prop-types';

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
    color: '#F98100',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#F98100',
  },
});

const HotelItem = props => {
  const { classes, hotel } = props;
  return (
    <Paper elevation={4} className={classes.card}>
      <Grid container key={hotel.name} direction="row" wrap="nowrap">
        <CardMedia className={classes.image} image={hotel.image} title={hotel.name} />
        <Grid container direction="row" wrap="nowrap">
          <Grid container direction="column">
            <CardContent>
              <Stars rate={hotel.rate} />
              <Typography style={{ color: '#F98100' }} variant="headline">
                {hotel.name}
              </Typography>
              <Typography paragraph variant="subheading" color="textSecondary">
                {hotel.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" className={classes.buttonBook}>
                Book Now
              </Button>
              <Button size="small" className={classes.buttonPrice}>
                Price history
              </Button>
            </CardActions>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

HotelItem.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(HotelItem);
