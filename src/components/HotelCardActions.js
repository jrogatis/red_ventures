import React from 'react';
import { withStyles } from 'material-ui/styles';
import { CardActions } from 'material-ui/Card';
import { Button } from 'material-ui';

const styles = theme => ({
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

export default withStyles(styles)(HotelCardActions);
