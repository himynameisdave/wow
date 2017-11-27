import React, { Component } from 'react';
import uuid from 'uuid/v4';
import Confetti from './components/confetti/confetti.jsx';
import WowButton from './components/wow-button/wow-button.jsx';
import WowCounter from './components/wow-counter/wow-counter.jsx'
import rando from './rando.js';
import { BACKGROUNDS, WOW_MP3 } from './constants.js';
import './app.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            audioEls: [],
            background: this.getBackground(),
            wows: 0,
            lastBGUpdate: 0,
        };
    };

    componentDidUpdate(nextProps, nextState) {
        //  Change the BG every 25th wow
        if (nextState.wows > 1 && nextState.wows !== this.state.lastBGUpdate && nextState.wows % 25 === 0) {
            setTimeout(() => {
                this.setState(state => ({
                    ...state,
                    background: this.getBackground(),
                    lastBGUpdate: nextState.wows,
                }));
            });
        }
    }

    getBackground = () => {
        let background = rando(BACKGROUNDS);
        if (this.state && this.state.background) {
            while(background === this.state.background) {
                background = rando(BACKGROUNDS);
            }
        }
        return background;
    };

    playSound = () => {
        this.setState(state => ({
            ...state,
            wows: state.wows + 1,
            audioEls: state.audioEls.concat([
                this.makeAudioElement(),
            ]),
        }));
    };

    makeAudioElement = () => {
        const id = uuid();
        //  Remove this element after it plays
        setTimeout(() => this.removeAudioElement(id), 1750);
        return {
            id,
            el: (
                <audio key={id} autoPlay>
                    <source src={WOW_MP3} type="audio/mpeg" />
                </audio>
            ),
        }
    };

  removeAudioElement = (id) => {
    this.setState(state => ({
        ...state,
        audioEls: state.audioEls.filter(el => el.id !== id),
    }));
  };

    render() {
        const bgStyles = {
            backgroundImage: `url('${this.state.background}')`,
        };
        return (
            <div className="app" style={bgStyles}>
                <Confetti wows={this.state.wows} />
                <WowButton playSound={this.playSound} />
                <WowCounter wows={this.state.wows} />
                {this.state.audioEls.map(a => a.el)}
            </div>
        );
    }
}

export default App;
