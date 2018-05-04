import React, { Component } from 'react';
import Helmet from 'react-helmet';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import DateFieldsText from './DateFieldsText';
import moment from 'moment';
import Button from 'material-ui/Button';
import { connect } from 'react-redux';
import { fetchHotels, fetchDateRange } from '../actions';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    borderRadius: '25px',
    textTransform: 'none',
  },
  input: {
    display: 'none',
  },
  root: {
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
    },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subGroup: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
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
    this.setState(range);
  }

  render() {
    const { from, to } = this.state;
    const modifiers = { start: from, end: to };
    const { numberOfMonths, classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.subGroup}>
          <DateFieldsText label="CHECK - IN" value={moment(from).format('MMM DD YYYY')} />
          <DateFieldsText label="CHECK - OUT" value={moment(to).format('MMM DD YYYY')} />
          <Button
            color="primary"
            variant="raised"
            className={classes.button}
            disabled={!(from && to)}
            onClick={() => this.props.fetchHotels()}
          >
            Search hotels
          </Button>
        </div>
        <DayPicker
          className="Selectable"
          numberOfMonths={numberOfMonths}
          selectedDays={[from, { from, to }]}
          modifiers={modifiers}
          onDayClick={day => this.handleDayClick(day)}
        />
        <Helmet>
          <style>{`
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
}

DatePicker.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({ hotels, dateRanges }) => ({
  hotels,
});

export default connect(mapStateToProps, { fetchHotels, fetchDateRange })(
  withStyles(styles)(DatePicker),
);
