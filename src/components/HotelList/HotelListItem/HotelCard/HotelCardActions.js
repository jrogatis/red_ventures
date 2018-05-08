import React from 'react';
import { withStyles } from 'material-ui/styles';
import { CardActions } from 'material-ui/Card';
import { Button } from 'material-ui';
import PropTypes from 'prop-types';

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
    color: theme.palette.primary.light,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.palette.primary.light,
  },
});

const HotelCardActions = props => {
  const { classes, showGraph } = props;
  return (
    <CardActions>
      <Button size="small" className={classes.buttonBook}>
        Book Now
      </Button>
      <Button size="small" onClick={ev => showGraph()} className={classes.buttonPrice}>
        Price history
      </Button>
    </CardActions>
  );
};

HotelCardActions.propTypes = {
  classes: PropTypes.object.isRequired,
  showGraph: PropTypes.func.isRequired,
};

export default withStyles(styles)(HotelCardActions);
