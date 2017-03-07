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
      <TrafficLightController intervalSeconds={5} yellowIntervalSeconds={1} />);
    let trafficLights = trafficLightController.find(TrafficLight);
    let expectedTrafficLights = [
      <TrafficLight name='N' light='Green' />,
      <TrafficLight name='S' light='Green' />,
      <TrafficLight name='E' light='Red' />,
      <TrafficLight name='W' light='Red' />,
    ];
    expect(trafficLights.length).toEqual(4);
    expectedTrafficLights.forEach(trafficLight =>
        expect(trafficLights.contains(trafficLight)).toBeTruthy());
  });

  it('should display counter and update it every 1000 milliseconds', () => {
    const trafficLightController = mount(
      <TrafficLightController intervalSeconds={3} yellowIntervalSeconds={1} />);
    expect(trafficLightController.find('h2').text()).toEqual('Counter=1');
    jasmine.clock().tick(1001);
    expect(trafficLightController.find('h2').text()).toEqual('Counter=2');
    jasmine.clock().tick(1001);
    expect(trafficLightController.find('h2').text()).toEqual('Counter=3');
    jasmine.clock().tick(1001);
    expect(trafficLightController.find('h2').text()).toEqual('Counter=1');
  });

  it('should update light state from red -> green', () => {
    const period = 5;
    const trafficLightController = mount(
      <TrafficLightController
        intervalSeconds={period}
        yellowIntervalSeconds={1}
      />);
    expect(trafficLightController.contains(
      <TrafficLight name='E' light='Red' />)).toBeTruthy();
    expect(trafficLightController.contains(
      <TrafficLight name='W' light='Red' />)).toBeTruthy();

    jasmine.clock().tick((period * 1000) + 1);
    expect(trafficLightController.contains(
      <TrafficLight name='E' light='Green' />)).toBeTruthy();
    expect(trafficLightController.contains(
      <TrafficLight name='W' light='Green' />)).toBeTruthy();
  });

  it('should update light state from green -> yellow -> red -> green', () => {
    const period = 5;
    const yellowInterval = 3;
    const trafficLightController = mount(
      <TrafficLightController
        intervalSeconds={period}
        yellowIntervalSeconds={yellowInterval}
      />);
    expect(trafficLightController.contains(
      <TrafficLight name='N' light='Green' />)).toBeTruthy();
    expect(trafficLightController.contains(
      <TrafficLight name='S' light='Green' />)).toBeTruthy();

    jasmine.clock().tick(((period-yellowInterval) * 1000) + 1);
    expect(trafficLightController.contains(
      <TrafficLight name='N' light='Yellow' />)).toBeTruthy();
    expect(trafficLightController.contains(
      <TrafficLight name='S' light='Yellow' />)).toBeTruthy();

    jasmine.clock().tick(yellowInterval * 1000);
    expect(trafficLightController.contains(
      <TrafficLight name='N' light='Red' />)).toBeTruthy();
    expect(trafficLightController.contains(
      <TrafficLight name='S' light='Red' />)).toBeTruthy();

    jasmine.clock().tick((period-yellowInterval) * 1000);
    expect(trafficLightController.contains(
      <TrafficLight name='N' light='Red' />)).toBeTruthy();
    expect(trafficLightController.contains(
      <TrafficLight name='S' light='Red' />)).toBeTruthy();

    jasmine.clock().tick(yellowInterval * 1000);
    expect(trafficLightController.contains(
      <TrafficLight name='N' light='Green' />)).toBeTruthy();
    expect(trafficLightController.contains(
      <TrafficLight name='S' light='Green' />)).toBeTruthy();
  });

  it('should setInterval on mount and clearInterval on unmount', () => {
    spyOn(window, 'setInterval');
    spyOn(window, 'clearInterval');
    const trafficLightController = mount(
      <TrafficLightController intervalSeconds={5} yellowIntervalSeconds={3} />);
    expect(window.setInterval).toHaveBeenCalled();
    trafficLightController.unmount();
    expect(window.clearInterval).toHaveBeenCalled();
  });
});
