import React from 'react';
import ReactDOM from 'react-dom';
import TrafficLightController from './components/TrafficLightController';

ReactDOM.render(
  <TrafficLightController period={15} yellowInterval={5} />,
  document.getElementById('app'),
);
