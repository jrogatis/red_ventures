import React from 'react';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    width: 100,
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
      <Typography> Filters </Typography>{' '}
    </Card>
  );
};

ListFilters.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(ListFilters);
