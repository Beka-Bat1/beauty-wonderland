

import React from 'react'
import "./Button.scss"


const Button = (props) => {
    return (
        <button className="button__primary">
            <span className="button__text">{props.text}</span>
        </button>
    )
}

export default Button