import React, { Component } from 'react';
import Helmet from 'react-helmet';
import DayPicker, { DateUtils } from 'react-day-picker';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { Grid } from 'material-ui';
import { connect } from 'react-redux';

import { fetchDateRange } from '../../actions';
import LeftBox from './LeftBox';

import 'react-day-picker/lib/style.css';

const styles = theme => ({
  root: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
      alignItems: 'center',
      justify: 'space-around',
    },
  },
  button: {
    margin: theme.spacing.unit,
    borderRadius: '25px',
    textTransform: 'none',
    backgroundColor: 'transparent',
    color: theme.palette.primary.light,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.palette.primary.light,
  },
  input: {
    display: 'none',
  },
  subGroup: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  left: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'row',
    },
  },
});

class DatePicker extends Component {
  static defaultProps = {
    numberOfMonths: 1,
  };
  constructor(props) {
    super(props);
    this.state = {
      from: undefined,
      to: undefined,
    };
  }

  handleDayClick(day) {
    const range = DateUtils.addDayToRange(day, this.state);
    this.props.fetchDateRange(range);
    this.setState(range);
  }

  renderDayPicker() {
    const { from, to } = this.state;
    const modifiers = { start: from, end: to };
    const { numberOfMonths } = this.props;
    return (
      <div>
        <DayPicker
          className="Selectable"
          numberOfMonths={numberOfMonths}
          selectedDays={[from, { from, to }]}
          modifiers={modifiers}
          onDayClick={day => this.handleDayClick(day)}
        />
        <Helmet>
          <style>{`
              .dayPicker {
                font-family: Heebo !important;
              }
              .Selectable .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
                background-color: #79BD1A !important;
                color: #f0f8ff;
              }
              .Selectable .DayPicker-Day {
                border-radius: 0 !important;
              }
              .Selectable .DayPicker-Day--start {
                border-top-left-radius: 50% !important;
                border-bottom-left-radius: 50% !important;
                  background-color: #79BD1A !important;
              }
              .Selectable .DayPicker-Day--end {
                border-top-right-radius: 50% !important;
                border-bottom-right-radius: 50% !important;
                  background-color: #79BD1A !important;
              }
            `}</style>
        </Helmet>
      </div>
    );
  }

  render() {
    const { classes } = this.props;
    const { from, to } = this.state;
    return (
      <Grid
        container
        direction="row"
        justify="center"
        spacing={16}
        wrap="nowrap"
        className={classes.root}
      >
        <LeftBox from={from} to={to} />
        {this.renderDayPicker()}
      </Grid>
    );
  }
}

DatePicker.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({ hotels, dateRanges }) => ({
  hotels,
});

export default connect(mapStateToProps, { fetchDateRange })(withStyles(styles)(DatePicker));
