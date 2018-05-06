import React from 'react';
import { Paper, Typography, Grid } from 'material-ui';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import PriceSlider from './PriceSlider';
import StarsSelector from './StarsSelector';

const styles = theme => ({
  root: {
    width: 250,
    height: 430,
    padding: theme.spacing.unit + 10,
  },
  title: {
    marginBottom: theme.spacing.unit + 20,
  },
});

const ListFilters = props => {
  const { classes } = props;
  return (
    <Paper elevation={4} className={classes.root}>
      <Grid container direction="column" alignContent="flex-start">
        <Typography className={classes.title} align="left" variant="headline">
          Filters
        </Typography>
        <PriceSlider />
        <StarsSelector />
      </Grid>
    </Paper>
  );
};

ListFilters.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(ListFilters);
