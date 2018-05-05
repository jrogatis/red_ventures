import React from 'react';
import { withStyles } from 'material-ui/styles';
import StarRow from './StarRow';
import { Grid } from 'material-ui';

const styles = theme => ({});

const StarsSelector = props => {
  const { classes } = props;
  const list = [];
  for (let r = 0; r < 5; r++) {
    list.push(<StarRow row={r} key={`keySelector-${r}`} />);
  }
  return (
    <Grid
      container
      className={classes.root}
      justify="center"
      alignItems="center"
      direction="column"
    >
      {list}
    </Grid>
  );
};

export default withStyles(styles)(StarsSelector);
