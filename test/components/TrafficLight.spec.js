import TrafficLight from '../../src/components/TrafficLight'
import mount from 'enzyme'
import React from 'react'

describe('TrafficLight', () => {

  it('should render a div with .trafficlight.{name}.{light} classes', () => {
    const trafficLight = mount(<TrafficLight name="N" light="green" />)
    expect(trafficLight.find(".trafficlight.N.green").exists())
  });

});
