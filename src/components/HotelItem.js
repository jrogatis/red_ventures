import React from 'react';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import { Star, StarOutline } from 'mdi-material-ui';
import { Typography } from 'material-ui';
import Stars from './Stars';

const styles = theme => ({
  card: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  image: {
    height: 200,
    width: 200,
    minHeight: 200,
    minWidth: 200,
    marginTop: 20,
    marginBottom: 20,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
});

const HotelItem = props => {
  const { classes, hotel } = props;
  return (
    <div style={{ width: 1000 }}>
      <Card key={hotel.name} className={classes.card}>
        <CardMedia className={classes.image} image={hotel.image} title={hotel.name} />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Stars rate={hotel.rate} />
            <Typography variant="headline">{hotel.name}</Typography>
            <Typography variant="subheading" color="textSecondary">
              {hotel.description}
            </Typography>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default withStyles(styles)(HotelItem);
