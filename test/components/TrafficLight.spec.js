import TrafficLight from '../../src/components/TrafficLight'
import {shallow} from 'enzyme'
import React from 'react'

describe('TrafficLight', () => {

  it('should render a div with .trafficlight.{name}.{light} classes', () => {
    let name = "N"
    let light = "green" 
    const trafficLight = shallow(<TrafficLight name={name} light={light} />)
    expect(trafficLight.find(`.trafficlight.${name}.${light}`).exists())
  });

});
