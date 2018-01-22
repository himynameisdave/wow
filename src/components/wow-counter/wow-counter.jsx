import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import rando from '../../rando.js';
import { COLOURS } from '../../constants.js';
import './wow-counter.css';


class WowCounter extends PureComponent {

    constructor(props) {
        super(props);
        this.DEFAULT_BG_OFFSET = 15;
        this.CONTAINER_BG_OFFSET = 15;
        this.TEXT_BG_OFFSET = 27;
    }

    //  Every ${bgOffset}th wow, the background is filled in
    getStyles = (bgOffset = this.DEFAULT_BG_OFFSET) => ({
        background: this.props.wows % bgOffset === 0 ? rando(COLOURS) : 'transparent',
        color: rando(COLOURS),
    });

    render() {
        return this.props.wows === 0 ? null : (
            <div className="wow-counter" style={this.getStyles(this.CONTAINER_BG_OFFSET)}>
                You have been wow'd <span style={this.getStyles(this.TEXT_BG_OFFSET)}>{this.props.wows}</span> times
            </div>
        );
    }
}

WowCounter.propTypes = {
    wows: PropTypes.number.isRequired,
};

export default WowCounter;
