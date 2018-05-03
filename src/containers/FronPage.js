import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from '../images/hero.jpg';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import AppBarButtons from '../components/AppBarButtons';
import crown from '../images/crown-white.svg';

const styles = theme => ({
  root: theme.mixins.gutters({
    margin: '0,0.0.0',
    Padding: '0,0,16,9',
  }),
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
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
  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root} elevation={4}>
        <AppBar position="sticky" className={classes.appBar}>
          <Toolbar>
            <AppBarButtons />
          </Toolbar>
          <CardMedia className={classes.media} image={crown} />
        </AppBar>
      </Paper>
    );
  }
}

FrontPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FrontPage);
