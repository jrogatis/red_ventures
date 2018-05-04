import React from 'react';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import { Typography, Button, Grid } from 'material-ui';
import Stars from './Stars';
import PropTypes from 'prop-types';

const styles = theme => ({
  root: {
    width: 1200,
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit + 135,
    marginBottom: theme.spacing.unit,
    marginLeft: theme.spacing.unit - 40,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  image: {
    height: 200,
    minHeight: 200,
    minWidth: 200,
    marginTop: 20,
    marginBottom: 20,
    transform: 'translatex(120px)',
    borderRadius: '5px',
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
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
    <div className={classes.root} key={hotel.name}>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <CardMedia className={classes.image} image={hotel.image} title={hotel.name} />
        <Grid item xm={6} sm={6} md={8} lg={10} xl={10}>
          <Card key={hotel.name} className={classes.card}>
            <Grid className={classes.details}>
              <CardContent className={classes.content}>
                <Stars rate={hotel.rate} />
                <Typography variant="headline">{hotel.name}</Typography>
                <Typography variant="subheading" color="textSecondary">
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
          </Card>
        </Grid>
      </div>
    </div>
  );
};

HotelItem.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(HotelItem);
