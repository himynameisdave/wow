import React, { PureComponent } from 'react';
import hiscore from '../../hiscore.js';

class Hiscore extends PureComponent {

    state = {
        currentHiscore: hiscore.get() || 1,
        on: true,
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState(state => ({
                on: !state.on,
            }));
        }, 100);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    getStyles = (on) => ({
        backgroundColor: on ? 'red' : 'blue',
        color: on ? 'blue' : 'red',
        fontSize: '1.5rem',
        fontFamily: 'monospace',
        marginTop: '0.5rem',
        zIndex: '1000'
    })

    render() {
        return this.props.wows > this.state.currentHiscore ? (
            <div className="hiscore" style={this.getStyles(this.state.on)}>
                wow! you beat your previous hiscore of {this.state.currentHiscore}
            </div>
        ) : null;
    }
};

export default Hiscore;
