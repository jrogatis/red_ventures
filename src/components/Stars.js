import React from 'react';
import { withStyles } from 'material-ui/styles';
import { Star } from 'mdi-material-ui';

const styles = theme => ({
  stars: { color: '#F98100' },
});

const Stars = props => {
  const { rate } = props;
  const stars = [];
  for (let r = 0; r < rate; r++) {
    stars.push(<Star className={props.classes.stars} key={`star-${r}`} />);
  }
  return <div>{stars}</div>;
};

export default withStyles(styles)(Stars);
