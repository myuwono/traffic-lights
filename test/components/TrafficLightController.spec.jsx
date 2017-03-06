import {mount} from 'enzyme';
import React from 'react';
import TrafficLightController from
    '../../src/components/TrafficLightController';
import TrafficLight from '../../src/components/TrafficLight';

describe('TrafficLightController', () => {

  beforeEach(() => {
    jasmine.clock().install();
  });

  afterEach(() => {
    jasmine.clock().uninstall();
  });

  it('should render the expected traffic lights to the DOM', () => {
    const trafficLightController = mount(
      <TrafficLightController period={5} yellowInterval={1} />);
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

  it('should call tick every 1000 milliseconds', () => {
    const trafficLightController = mount(
      <TrafficLightController period={5} yellowInterval={1} />);
    let instance = trafficLightController.instance();
    spyOn(instance, 'tick');
    expect(instance.tick).not.toHaveBeenCalled();
    jasmine.clock().tick(1001);
    expect(instance.tick).toHaveBeenCalled();
  });
});
