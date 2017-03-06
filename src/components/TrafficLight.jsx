import React from 'react';

const TrafficLight = props => (
  <div className={`trafficlight ${props.name} ${props.light}`}>
    {props.name}={props.light}
  </div>
);

TrafficLight.propTypes = {
  name: React.PropTypes.string.isRequired,
  light: React.PropTypes.string.isRequired,
};

export default TrafficLight
