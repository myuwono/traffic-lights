import React from 'react';
import ReactDOM from 'react-dom';
import TrafficLightController from './components/TrafficLightController';

ReactDOM.render(
  <TrafficLightController period={300} yellowInterval={30} />,
  document.getElementById('app'),
);
