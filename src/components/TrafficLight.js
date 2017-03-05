import React from "react"

export default class TrafficLight extends React.Component {
    render = () => 
        <div className={`trafficlight ${this.props.name} ${this.props.light}`}>
            {this.props.name}={this.props.light}
        </div>  
}

TrafficLight.propTypes = {
  name: React.PropTypes.string,
  light: React.PropTypes.string
}
