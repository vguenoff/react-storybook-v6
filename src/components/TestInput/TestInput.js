import React from 'react';
import './TestInput.scss';

function TestInput({ variant = 'medium', value, ...rest }) {
    return (
        <input
            className={`input input--${variant}`}
            type="text"
            {...{ value }}
            onChange={() => {}}
            {...rest}
        />
    );
}

export default TestInput;
