import React from 'react'
import OtherPage from './OtherPage'

const Teams = () => {
    return (<>
        <OtherPage heading={"Our Team"} para1={"Paragraph 1 "} para2={"Paragraph 2"} />
        <div className="container mb-4">
            <div className="row g-4">
                <div className="col col-md-4 card">
                    <img src="" alt="" />
                    <p className='text-center'> HEllo </p>
                </div>
                <div className="col col-md-4 card">
                    <img src="" alt="" />
                    <p className='text-center'> HEllo </p>
                </div>
                <div className="col col-md-4 card">
                    <img src="" alt="" />
                    <p className='text-center'> HEllo </p>
                </div>
            </div>
        </div>
    </>
    )
}

export default Teams