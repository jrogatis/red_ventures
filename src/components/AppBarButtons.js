import React, { Component } from 'react';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu, { MenuItem } from 'material-ui/Menu';

const styles = theme => ({
  button: {
    textTransform: 'none',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

class AppBarButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 800,
      height: 182,
      anchorEl: null,
    };
  }

  componentDidMount = () => {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions.bind(this));
  };

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.updateDimensions.bind(this));
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  updateDimensions = () => {
    if (window.innerWidth < 500) {
      this.setState({ width: 450, height: 102 });
    } else {
      const update_width = window.innerWidth - 100;
      const update_height = Math.round(update_width / 4.4);
      this.setState({ width: update_width, height: update_height });
    }
  };
  render() {
    const { classes } = this.props;
    const { width, anchorEl } = this.state;
    if (width > 500) {
      return (
        <div>
          <Button className={classes.button} color="inherit">
            The Queen City
          </Button>
          <Button className={classes.button} color="inherit">
            My Reservations
          </Button>
          <Button className={classes.button} color="inherit">
            Guide
          </Button>
        </div>
      );
    }
    return (
      <div>
        <IconButton
          className={classes.menuButton}
          color="inherit"
          aria-label="Menu"
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>The Queen City</MenuItem>
          <MenuItem onClick={this.handleClose}> My Reservations</MenuItem>
          <MenuItem onClick={this.handleClose}>Guide</MenuItem>
        </Menu>
      </div>
    );
  }
}

export default withStyles(styles)(AppBarButtons);
