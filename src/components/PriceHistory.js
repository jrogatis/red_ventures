import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { VictoryBar, VictoryChart, VictoryContainer, VictoryAxis } from 'victory';

const styles = theme => ({});

const graphTeme = {
  data: {
    fill: '#F98100',
    stroke: '#F98100',
  },
  labels: { fontSize: 12, stoke: '#B5B5B5', fill: '#B5B5B5' },
  parent: { border: '1px solid #ccc' },
  axis: { stroke: '#B5B5B5', strokeWidth: 2 },
  tickLabels: { fill: '#B5B5B5' },
};

const axisTheme = {
  axis: { stroke: '#B5B5B5', strokeWidth: 1 },
  tickLabels: {
    fill: '#B5B5B5',
    fontFamily: 'inherit',
    fontSize: 18,
  },
};

const Graph = props => {
  const { values, height, width } = props;
  return (
    <VictoryChart
      domainPadding={40}
      height={height}
      width={width}
      containerComponent={<VictoryContainer responsive={false} />}
    >
      <VictoryBar
        data={values}
        x="month"
        y={d => d.value}
        style={graphTeme}
        animate={{
          onExit: {
            duration: 500,
            before: () => ({ opacity: 0.3, _y: 0 }),
          },
          onEnter: {
            duration: 500,
            before: () => ({ opacity: 0.3, _y: 0 }),
            after: datum => ({ opacity: 1, _y: datum._y }),
          },
        }}
      />
      <VictoryAxis style={axisTheme} />
    </VictoryChart>
  );
};
const PriceHistory = props => {
  return Graph(props);
};

PriceHistory.propTypes = {
  classes: PropTypes.object.isRequired,
  values: PropTypes.array.isRequired,
};

export default withStyles(styles)(PriceHistory);
