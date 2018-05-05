import React from 'react';
import StarsFull from './StarsFull';
import { withStyles } from 'material-ui/styles';
import { FormControlLabel } from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';

const styles = theme => ({
  stars: { backgroundColor: '#FFBA23' },
  root: {
    color: '#FFBA23',
    '&$checked': {
      color: '#FFBA23',
    },
  },
  checked: {},
});

const StarRow = props => {
  const { classes, row } = props;
  const label = <StarsFull full={row + 1} className={classes.stars} key={`starsList-${row}`} />;
  return (
    <FormControlLabel
      control={
        <Checkbox
          classes={{
            root: classes.root,
            checked: classes.checked,
          }}
        />
      }
      label={label}
    />
  );
};

export default withStyles(styles)(StarRow);
