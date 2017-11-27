import React, { Component } from 'react';
import uuid from 'uuid/v4';
import rando from '../../rando.js';
import { TILES } from '../../constants.js';
import './confetti.css';


class Confetti extends Component {

    state = {
        confetti: []
    };

    componentWillReceiveProps(nextProps) {
        const lastConfetti = [...this.state.confetti].pop();
        if (nextProps.wows % 10 ===  0 && (!lastConfetti || (lastConfetti.wowNumber !== nextProps.wows))) {
            this.setState(state => ({
                confetti: state.confetti.concat([ this.confettiWap(nextProps.wows) ]),
            }));
        };
    };

    confettiWap = (wows) => {
        const id = uuid();
        const timeout = 10000;
        let image = rando(TILES);
        //  No two of the same confetts on the screen at once
        while(this.state.confetti.map(confett => confett.image).includes(image)) {
            image = rando(TILES);
        };
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

    cleanupCrew = (id) => {
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
