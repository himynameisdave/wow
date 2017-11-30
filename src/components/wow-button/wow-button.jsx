import React from 'react';
import { WOW_MAX_PNG } from '../../constants.js';
import './wow-button.css';

const WowButton = ({ getButtonRef, playSound }) => (
    <button
        className="wow-button"
        onClick={playSound}
        ref={getButtonRef}
        style={{
            backgroundImage: `url(${WOW_MAX_PNG})`,
        }}
    />
);

export default WowButton;
