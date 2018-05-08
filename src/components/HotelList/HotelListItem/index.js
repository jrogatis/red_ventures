import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import { CardMedia } from 'material-ui/Card';
import { Grid, Paper } from 'material-ui';
import PropTypes from 'prop-types';
import ContainerDimensions from 'react-container-dimensions';

import HotelCard from './HotelCard';
import PriceHistory from '../../PriceHistory';

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    marginLeft: theme.spacing.unit + 40,
    [theme.breakpoints.down('xs')]: {
      marginLeft: theme.spacing.unit,
      marginTop: theme.spacing.unit + 60,
    },
  },
  content: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  image: {
    [theme.breakpoints.down('xs')]: {
      float: 'top',
      marginLeft: 0,
      marginTop: -50,
      transform: 'translateX(-50%)',
    },
    height: 200,
    width: 200,
    minWidth: 200,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: '5px',
    float: 'left',
    marginLeft: -40,
    boxShadow:
      '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
  },
});

class HotelItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showGraph: false,
    };
  }

  handleShowGraph() {
    const { showGraph } = this.state;
    this.setState({ showGraph: !showGraph });
  }

  render() {
    const { classes, hotel, days } = this.props;
    const { showGraph } = this.state;
    return (
      <Paper elevation={4} className={classes.root}>
        <Grid container className={classes.content} key={hotel.name} direction="row" wrap="nowrap">
          <Grid item xs sm={4} md={3} lg={2}>
            <CardMedia className={classes.image} image={hotel.image} title={hotel.name} />
          </Grid>
          <Grid item xs sm md lg>
            {!showGraph ? (
              <HotelCard hotel={hotel} days={days} showGraph={() => this.handleShowGraph()} />
            ) : (
              <ContainerDimensions>
                <PriceHistory
                  values={hotel.price_history}
                  style={{ maxHeight: 200, height: 200 }}
                />
              </ContainerDimensions>
            )}
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

HotelItem.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(HotelItem);
