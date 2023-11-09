import React from 'react'

const TitleContainer = (props) => {
    return (
        <div>
            <p className="text-center text-primary fs-1 mb-0 fw-bold">
                {props.heading}
            </p>
            <p className="text-center text-primary fs-6">
                {props.subHeading}
            </p>
        </div>
    )
}

export default TitleContainer