import React,{ Component} from 'react';

export class Time extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTime: new Date().toString()
        };
    }

    componentWillMount() {
        setInterval(()=> {
            this.setState({
                currentTime: new Date().toString()
            });
        }, 1000);
    }

    render() {
        return (
            <div>The current time is {this.state.currentTime}</div>
        )
    }
}