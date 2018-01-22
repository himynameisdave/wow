import React from 'react';
import PropTypes from 'prop-types';
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

MaxGif.propTypes = {
    type: PropTypes.string.isRequired,
    xPos: PropTypes.number.isRequired,
    yPos: PropTypes.number.isRequired,
};

export default MaxGif;
