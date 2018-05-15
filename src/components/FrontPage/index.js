import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import { CardMedia } from 'material-ui/Card';

import AppBarButtons from './AppBarButtons';
import crown from '../../images/crown-white-min2.jpg';
import Footer from '../Footer';
import DateSelector from '../DateSelector';
import HotelsList from '../HotelList';

const styles = theme => ({
  root: {
    margin: '0,0,10,0',
    backgroundImage: `url(${crown})`,
    backgroundSize: 'cover',
    backgroundPosition: 'top',
  },
  appBar: {
    backgroundColor: 'transparent',
  },
  button: {
    textTransform: 'none',
  },
  details: {
    display: 'block',
  },
});

class FrontPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root} elevation={4}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <AppBarButtons />
          </Toolbar>
        </AppBar>
        <div className={classes.details}>
          <DateSelector />
          <HotelsList />
        </div>
        <Footer />
      </Paper>
    );
  }
}

FrontPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FrontPage);
