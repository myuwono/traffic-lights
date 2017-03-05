import React from "react"
import TrafficLight from "./TrafficLight"

const states = {
    GREEN: "Green",
    YELLOW: "Yellow",
    RED: "Red"
};

export default class TrafficLightController extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 1,
            lights: {
                N: states.GREEN,
                S: states.GREEN,
                E: states.RED,
                W: states.RED
            }
        };
    }
    
    threshold = this.props.period - this.props.yellowInterval

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        let normalizedCount = this.state.counter % this.props.period
        
        let updatedState = { ... this.state,
            counter: normalizedCount + 1
        };
        for(let name in this.state.lights) {
            let current = this.state.lights[name]
            if (current === states.GREEN && normalizedCount >= this.threshold) {
                updatedState.lights[name] = states.YELLOW
            } else if (current === states.YELLOW && normalizedCount == 0) {
                updatedState.lights[name] = states.RED
            } else if (current === states.RED && normalizedCount == 0) {
                updatedState.lights[name] = states.GREEN
            }
        }
        this.setState(updatedState);
    }

    render = () => 
        <div>
            <h2>Counter={this.state.counter}</h2>
            {Object.keys(this.state.lights).map(k =>
                <TrafficLight key={k} name={k} light={this.state.lights[k]}/>)}
        </div>   
}
