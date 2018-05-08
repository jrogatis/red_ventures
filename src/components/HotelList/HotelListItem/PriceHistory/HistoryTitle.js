import React from 'react';
import { withStyles } from 'material-ui/styles';
import KeyboardBackspace from '@material-ui/icons/KeyboardBackspace';
import { Grid, Button, Typography } from 'material-ui';
import PropTypes from 'prop-types';

const styles = theme => ({
  title: {
    color: theme.palette.primary.light,
  },
  titleButton: {
    margin: theme.spacing.unit,
    textTransform: 'none',
  },
  backSpaceIcon: {
    marginLeft: theme.spacing.unit,
    color: theme.palette.primary.light,
    fontSize: 40,
  },
});

const HistoryTitle = props => {
  const { classes, showGraph } = props;
  return (
    <Grid container direction="row" wrap="nowrap" justify="space-around" alignItems="center">
      <Grid item>
        <Typography variant="subheading" gutterBottom className={classes.title}>
          PRICE HISTORY FOR 2017
        </Typography>
      </Grid>
      <Grid item>
        <Button className={classes.titleButton} onClick={() => showGraph()}>
          <KeyboardBackspace className={classes.backSpaceIcon} style={{ fontSize: 30 }} />
          Back to descrition
        </Button>
      </Grid>
    </Grid>
  );
};

HistoryTitle.propTypes = {
  classes: PropTypes.object.isRequired,
  showGraph: PropTypes.func.isRequired,
};

export default withStyles(styles)(HistoryTitle);
