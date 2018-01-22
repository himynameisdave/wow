import React from 'react';
import PropTypes from 'prop-type';
import { WOW_MAX_PNG } from '../../constants.js';
import './wow-button.css';

const WowButton = ({ getButtonRef, playSound }) => (
    <button
        ref={getButtonRef}
        className="wow-button"
        onClick={playSound}
        style={{
            backgroundImage: `url(${WOW_MAX_PNG})`,
        }}
    />
);

WowButton.propTypes = {
    getButtonRef: PropTypes.func.isRequired,
    playSound: PropTypes.func.isRequired,
};

export default WowButton;
