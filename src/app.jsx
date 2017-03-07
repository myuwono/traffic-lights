import React from 'react';
import ReactDOM from 'react-dom';
import TrafficLightController from './components/TrafficLightController';

ReactDOM.render(
  <TrafficLightController intervalSeconds={300} yellowIntervalSeconds={30} />,
  document.getElementById('app'),
);
