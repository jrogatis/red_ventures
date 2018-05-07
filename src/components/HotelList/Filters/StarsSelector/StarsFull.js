import React from 'react';
import { withStyles } from 'material-ui/styles';
import { Star, StarOutline } from 'mdi-material-ui';

const styles = theme => ({
  stars: { color: '#F98100' },
});

const StarsFull = props => {
  const { full } = props;
  const stars = [];
  for (let r = 0; r < 5; r++) {
    stars.push(
      r < full ? (
        <Star className={props.classes.stars} key={`star-${r}`} />
      ) : (
        <StarOutline className={props.classes.stars} key={`star-${r}`} />
      ),
    );
  }
  return <div>{stars}</div>;
};

export default withStyles(styles)(StarsFull);
