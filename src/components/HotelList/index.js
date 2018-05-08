import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import { Grid, Typography, Button, Hidden } from 'material-ui';
import FilterIcon from '@material-ui/icons/Filter';
import moment from 'moment';

import HotelItem from './HotelListItem';
import ListFilters from './Filters';
import FilterDialog from './Filters/FilterDialog';

const styles = theme => ({
  root: {
    margin: '20px 20px 20px 0px',
    [theme.breakpoints.down('sm')]: {
      margin: '20px',
    },
  },
  hotelList: {
    margin: '20 20 0 0px',
  },
  button: {
    position: 'fixed',
    marginLeft: '85%',
    zIndex: 9999,
    align: 'left',
  },
});

class HotelsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogOpen: false,
    };
  }

  handleDialog = () => {
    const { dialogOpen } = this.state;
    this.setState({
      dialogOpen: !dialogOpen,
    });
  };
  render() {
    const {
      classes,
      hotels: { hotels },
      dateRanges: { dateRange },
    } = this.props;

    return hotels && dateRange ? (
      <div>
        <FilterDialog handleDialog={() => this.handleDialog()} open={this.state.dialogOpen} />
        <Hidden mdUp>
          <Button
            variant="fab"
            onClick={ev => this.handleDialog()}
            color="primary"
            aria-label="filter"
            className={classes.button}
          >
            <FilterIcon />
          </Button>
        </Hidden>
        <Grid container direction="column" wrap="nowrap" alignItems="center">
          <Typography align="center" variant="display1">
            Best choices between {moment(dateRange.from).format('MMM DD')} and {''}
            {moment(dateRange.to).format('MMM DD')}
          </Typography>
          <Grid
            container
            className={classes.root}
            direction="row"
            wrap="nowrap"
            alignItems="flex-start"
            alignContent="center"
          >
            <Grid item xs md={3} lg={2} hidden={{ smDown: true }}>
              <ListFilters />
            </Grid>
            <Grid item xs={12} sm={11} md={9} lg={10}>
              <Grid container className={classes.hotelList}>
                {hotels.map(hotel => (
                  <Grid key={hotel.name} item xs={12}>
                    <HotelItem
                      hotel={hotel}
                      key={hotel.name}
                      days={moment(dateRange.to).diff(dateRange.from, 'days')}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    ) : (
      <div> </div>
    );
  }
}

HotelsList.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({ hotels, dateRanges }) => ({
  hotels,
  dateRanges,
});

export default connect(mapStateToProps, null)(withStyles(styles)(HotelsList));
