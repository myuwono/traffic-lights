import {mount} from 'enzyme';
import React from 'react';
import TrafficLight from '../../src/components/TrafficLight';

describe('TrafficLight', () => {
  it('should render a div with .trafficlight.{name}.{light} classes', () => {
    let name = 'N';
    let light = 'green';
    const trafficLight = mount(<TrafficLight name={name} light={light} />);
    expect(trafficLight.find(`.trafficlight.${name}.${light}`).exists())
        .toBeTruthy();
  });
});
