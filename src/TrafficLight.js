import React from "react";

class TrafficLight extends React.Component {
    render = () => <h2>{this.props.name}={this.props.light}</h2>  
}