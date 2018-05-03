import React, { Component } from 'react';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import { isMobile } from 'react-device-detect';

const styles = theme => ({
  button: {
    textTransform: 'none',
  },
});

class AppBarButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 800,
      height: 182,
    };
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions.bind(this));
  }

  updateDimensions() {
    if (window.innerWidth < 500) {
      this.setState({ width: 450, height: 102 });
    } else {
      const update_width = window.innerWidth - 100;
      const update_height = Math.round(update_width / 4.4);
      this.setState({ width: update_width, height: update_height });
    }
  }
  render() {
    const { classes } = this.props;
    const { width } = this.state;
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
    return <div> OPA </div>;
  }
}

export default withStyles(styles)(AppBarButtons);
