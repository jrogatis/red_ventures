import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';

import AppBarButtons from './AppBarButtons';
import hero from '../../images/hero-croped.jpg';
import crown from '../../images/crown.svg';
import Footer from '../Footer';
import DateSelector from '../DateSelector';
import HotelsList from '../HotelList';

const styles = theme => ({
  root: {
    margin: '0,0,10,0',
    fontFamily: 'Heebo',
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
  image: {
    backgroundImage: `url(${hero})`,
    backgroundSize: 'cover',
    backgroundPosition: 'top',
    height: 'auto',
    width: '100%',
    marginTop: '-100px',
    display: 'block',
    paddingTop: '44.25%',
    fontSize: '130%',
    [theme.breakpoints.down('lg')]: {
      fontSize: '100%',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '80%',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '60%',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '40%',
    },
  },
  textBox: {
    position: 'absolute',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    color: '#fff',
    fontSize: '1.5em',
    [theme.breakpoints.down('md')]: {
      top: '20%',
    },
    [theme.breakpoints.down('sm')]: {
      top: '15%',
    },
    [theme.breakpoints.down('xs')]: {
      top: '9%',
    },
  },
  crown: {
    height: '2em',
    width: '2em',
  },
  middleTite: {
    borderTop: '2px solid #fff',
    borderBottom: '2px solid #fff',
    fontSize: '3.0em',
    padding: '0px 20px',
    letterSpacing: '5px',
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
        <div className={classes.image}>
          <div className={classes.textBox}>
            <div>
              <img src={crown} alt="crown" className={classes.crown} />
            </div>
            <div>WELCOME TO</div>
            <div className={classes.middleTite}> CHARLOTTE</div>
            <div>THE QUEEN CITY</div>
          </div>
        </div>
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
