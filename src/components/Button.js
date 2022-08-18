import React from 'react';
import '../stylesheet/Button.css';

function Button({ text, isClickBtn, driveClick }) {
  return (
    <button
      className={isClickBtn ? 'clickBtn' : 'rebootBtn'}
      onClick={driveClick}
    >
      {text}
    </button>
  );
}

export default Button;