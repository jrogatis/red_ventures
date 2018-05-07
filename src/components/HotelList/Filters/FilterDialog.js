import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { Button } from 'material-ui';
import Dialog from 'material-ui/Dialog';

import Filter from './index';

const styles = () => {};

const FilterDialog = props => {
  const { classes, onClose, selectedValue, handleDialog, ...other } = props;

  return (
    <Dialog aria-labelledby="simple-dialog-title" {...other}>
      <Filter />
      <Button color="primary" onClick={ev => handleDialog()}>
        Back to Hotels List
      </Button>
    </Dialog>
  );
};

FilterDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FilterDialog);
