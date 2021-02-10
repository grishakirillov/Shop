import React from 'react';
import classNames from 'classnames';

function Button({ className, link, outline, children }) {
    return (
        <div className="header__cart">
            <a href={link}>
                <button
                    className={classNames('button', className, {
                        'button-outline': outline,
                    })}>
                    <span>{children}</span>
                </button>
            </a>
        </div>
    )
}

export default Button
