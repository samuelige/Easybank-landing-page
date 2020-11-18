import React from 'react'
import './Button.css'

const Button = ({children, ...otherProps}) => {
    return (
        <div className="button">
            <button className="custom-button" {...otherProps}>{children}</button>
        </div>
    )
}

export default Button
