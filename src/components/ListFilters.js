import React from 'react';
import Card from 'material-ui/Card';
import { Typography, Grid } from 'material-ui';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import PriceSlider from './PriceSlider';
import StarsSelector from './StarsSelector';

const styles = theme => ({
  root: {},
  card: {
    width: 250,
    height: 350,
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    marginLeft: theme.spacing.unit,
  },
});

const ListFilters = props => {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <Grid
        container
        className={classes.root}
        justify="center"
        alignItems="center"
        direction="column"
      >
        <Typography> Filters </Typography>
        <PriceSlider />
        <StarsSelector />
      </Grid>
    </Card>
  );
};

ListFilters.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(ListFilters);
