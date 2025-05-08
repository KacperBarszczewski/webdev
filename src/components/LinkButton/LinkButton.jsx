// src/components/Button/Button.jsx
import React from 'react';
import './LinkButton.scss';

const LinkButton = ({ children, href, variant = 'blue', ...props }) => {
    return (
        <a
            href={href}
            className={`button button--${variant}`}
            {...props}
        >
            {children}
        </a>
    );
};

export default LinkButton;
