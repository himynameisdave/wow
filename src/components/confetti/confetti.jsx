import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';
import rando from '../../rando.js';
import { TILES } from '../../constants.js';
import './confetti.css';


class Confetti extends Component {

    static propTypes = {
        wows: PropTypes.number.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            confetti: [],
        };
        //  Plop a new GIF into the confetti every X wow
        this.NEW_CONFETTI_INTERVAL = 10;
    }

    componentWillReceiveProps(nextProps) {
        const lastConfetti = [...this.state.confetti].pop();
        if (nextProps.wows % this.NEW_CONFETTI_INTERVAL === 0 && (!lastConfetti || (lastConfetti.wowNumber !== nextProps.wows))) {
            this.setState(state => ({
                confetti: state.confetti.concat([ this.confettiWap(nextProps.wows) ]),
            }));
        }
    }

    confettiWap = wows => {
        const id = uuid();
        const timeout = 10000;
        let image = rando(TILES);
        //  No two of the same confetts on the screen at once
        while (this.state.confetti.map(confett => confett.image).includes(image)) {
            image = rando(TILES);
        }
        const style = {
            backgroundImage: `url(${image})`,
        };
        setTimeout(() => this.cleanupCrew(id), timeout);
        return {
            id,
            image,
            el: (<div key={id} className="confetti__item" style={style} />),
            wowNumber: wows,
        };
    };

    cleanupCrew = id => {
        this.setState(state => ({
            confetti: state.confetti.filter(confett => confett.id !== id),
        }));
    };

    render() {
        return (
            <div className="confetti">
                {this.state.confetti.map(confett => confett.el)}
            </div>
        );
    }
}


export default Confetti;
