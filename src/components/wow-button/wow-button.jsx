import React from 'react';
import { WOW_MAX_PNG } from '../../constants.js';
import './wow-button.css';

const WowButton = ({ playSound }) => (
    <button
        className="wow-button"
        onClick={playSound}
        style={{
            backgroundImage: `url(${WOW_MAX_PNG})`,
        }}
    />
);

export default WowButton;
