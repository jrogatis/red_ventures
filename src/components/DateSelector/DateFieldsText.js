import React from 'react';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginTop: 20,
    width: 120,
  },
});

const DateFields = props => {
  const { classes, label, value, placeholder, id } = props;

  return (
    <form className={classes.container} noValidate>
      <TextField
        id={id}
        name={id}
        label={label}
        type="text"
        value={value}
        className={classes.textField}
        margin="normal"
        placeholder={placeholder}
        disabled
      />
    </form>
  );
};

DateFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DateFields);
