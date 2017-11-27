import React from 'react';
import { WOW_MAX_PNG } from './constants.js';
import './max-gif.css';

const MaxGif = ({ type, xPos, yPos }) => {
    const baseClass = 'max-gif';
    const classes = type === 'spin' ? `${baseClass} ${baseClass}--spin` : `${baseClass} ${baseClass}--rotate`;

    // const posStyles = {
    //     position: 'absolute',
    //     top: yPos === 'top' ? ''
    // };

    return (
        <div>
            <img src={WOW_MAX_PNG} />
        </div>
    );
};

export default MaxGif;
