import React from 'react'
import TitleContainer from './utility/TitleContainer'
import ThreeCards from './utility/ThreeCards'

const Title = (props) => {
    return ( props &&
        <section>
            <div className="container">
                <TitleContainer />
                <ThreeCards />
            </div>
        </section>
    )
}

export default Title