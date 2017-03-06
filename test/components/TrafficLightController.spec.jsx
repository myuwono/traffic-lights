import {mount} from 'enzyme';
import React from 'react';
import TrafficLightController from
    '../../src/components/TrafficLightController';
import TrafficLight from '../../src/components/TrafficLight';

describe('TrafficLightController', () => {
  var timerCallback;

  beforeEach(function() {
    timerCallback = jasmine.createSpy("timerCallback");
    jasmine.clock().install();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should render the expected traffic lights to the DOM', function() {
    const trafficLightController = mount(
      <TrafficLightController period={500} yellowInterval={1} />);
    let trafficLights = trafficLightController.find(TrafficLight);
    let expectedTrafficLights = [
      <TrafficLight name="N" light="Green" />,
      <TrafficLight name="S" light="Green" />,
      <TrafficLight name="E" light="Red" />,
      <TrafficLight name="W" light="Red" />,
    ];
    expect(trafficLights.length).toEqual(4);
    expectedTrafficLights.forEach(trafficLight =>
        expect(trafficLights.contains(trafficLight)).toBeTruthy());
  });
});
