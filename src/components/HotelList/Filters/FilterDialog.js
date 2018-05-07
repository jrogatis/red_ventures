import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import Dialog, { DialogTitle } from 'material-ui/Dialog';

const styles = () => {};

const FilterDialog = props => {
  const { classes, onClose, selectedValue, handleDialog, ...other } = props;

  return (
    <Dialog aria-labelledby="simple-dialog-title" {...other}>
      <DialogTitle id="simple-dialog-title">Filters</DialogTitle>
      <div>
        <button onCLick={ev => handleDialog()} />
      </div>
    </Dialog>
  );
};

FilterDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FilterDialog);
