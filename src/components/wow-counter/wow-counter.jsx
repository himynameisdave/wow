import React, { PureComponent } from 'react';
import rando from '../../rando.js';
import { COLOURS } from '../../constants.js';
import './wow-counter.css';


class WowCounter extends PureComponent {

    //  Every ${bgOffset}th wow, the background is filled in
    getStyles = (bgOffset = 15) => ({
        background: this.props.wows % bgOffset === 0 ? rando(COLOURS) : 'transparent',
        color: rando(COLOURS),
    });

    render() {
        return this.props.wows === 0 ? null : (
            <div className="wow-counter" style={this.getStyles(15)}>
                You have been wow'd <span style={this.getStyles(27)}>{this.props.wows}</span> times
            </div>
        );
    }
};

export default WowCounter;
