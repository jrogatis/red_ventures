import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from '../images/hero.jpg';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 0,
    paddingBottom: 16,
    marginTop: 0,
  }),
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    marginTop: '-60px',
  },
  appBar: {
    backgroundColor: 'transparent',
  },
});

class FrontPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root} elevation={4}>
        <AppBar position="sticky" className={classes.appBar}>
          <Toolbar>
            <Button color="inherit">The Queen City</Button>
            <Button color="inherit">My Reservations</Button>
            <Button color="inherit">Guide</Button>
          </Toolbar>
        </AppBar>

        <CardMedia className={classes.media} image={logo} />
      </Paper>
    );
  }
}

FrontPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FrontPage);
