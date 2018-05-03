import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import { Facebook, Twitter, Instagram } from 'mdi-material-ui';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

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
    alignItems: 'center',
  },
  button: {
    textTransform: 'none',
    marginLeft: 10,
    marginBotton: 30,
    backgroundColor: '#F98100',
  },
});
const Footer = props => (
  <AppBar position="static" className={props.classes.appBar}>
    <Toolbar>
      <IconButton className={props.classes.button} aria-label="Menu">
        <Facebook />
      </IconButton>
      <IconButton className={props.classes.button} aria-label="Menu">
        <Twitter />
      </IconButton>
      <IconButton className={props.classes.button} aria-label="Menu">
        <Instagram />
      </IconButton>
    </Toolbar>
    <Typography variant="subheading" align="center">
      © 2004-2017 Visit Charlotte. All Rights Reserved. 500 S. College Street, Suite 300, Charlotte,
      NC 28202
    </Typography>
  </AppBar>
);

export default withStyles(styles)(Footer);
