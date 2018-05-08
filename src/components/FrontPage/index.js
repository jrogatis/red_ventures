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
  },
  media: {
    height: 0,
    paddingTop: '38.25%',
    marginTop: '-60px',
  },
  appBar: {
    backgroundColor: 'transparent',
  },
  button: {
    textTransform: 'none',
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
        <CardMedia className={classes.media} image={crown} />
        <DateSelector />
        <HotelsList />
        <Footer />
      </Paper>
    );
  }
}

FrontPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FrontPage);
