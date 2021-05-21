import React from 'react'

const ErrorPage = (props) => {
    return (
        <div className="container text-center">
            <h1 className="text__title__black">{props.error} - Opps. That page doesn't exist.</h1>
        </div>
    )
}

export default ErrorPage
