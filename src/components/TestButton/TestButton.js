import React from 'react';
import './TestButton.css';

function TestButton({ variant = 'primary', children, ...rest }) {
    return (
        <button className={`button ${variant}`} {...rest}>
            {children}
        </button>
    );
}

export default TestButton;
