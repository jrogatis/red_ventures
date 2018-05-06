import React, { Component } from 'react';
import StarsFull from './StarsFull';
import { withStyles } from 'material-ui/styles';
import { FormControlLabel } from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';
import { connect } from 'react-redux';
import { filterStarsRangeAdd, filterStarsRangeRemove } from '../actions';

const styles = theme => ({
  stars: { backgroundColor: theme.palette.primary.light },
  root: {
    color: theme.palette.primary.light,
    '&$checked': {
      color: theme.palette.primary.light,
    },
  },
  checked: {},
});

class StarRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ckecked: false,
    };
  }

  handleChange(ev) {
    const { checked } = this.state;
    const { row } = this.props;
    if (!checked) {
      this.props.filterStarsRangeAdd(row + 1);
    } else {
      this.props.filterStarsRangeRemove(row + 1);
    }
    this.setState({ checked: !checked });
  }

  label() {
    const { classes, row } = this.props;
    return <StarsFull full={row + 1} className={classes.stars} key={`starsList-${row}`} />;
  }

  render() {
    const { classes } = this.props;
    return (
      <FormControlLabel
        control={
          <Checkbox
            classes={{
              root: classes.root,
              checked: classes.checked,
            }}
            value="checked"
            onChange={ev => this.handleChange('chacked')}
          />
        }
        label={this.label()}
      />
    );
  }
}

const mapStateToProps = ({ hotels, dateRanges }) => ({
  hotels,
  dateRanges,
});

export default connect(mapStateToProps, { filterStarsRangeAdd, filterStarsRangeRemove })(
  withStyles(styles)(StarRow),
);
