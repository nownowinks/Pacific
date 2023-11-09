import React from 'react'

const Section2 = (props) => {
    return (
        <section>
            <div className="container">
                <p className='text-center fs-1 fw-bold'>Study Abroad </p>
                <div className="row d-flex justify-content-center my-4">
                    {props.countries.map((elem) => {
                        return <div className="col12 col-md-2 me-3 ">
                            <img src={elem} alt="" style={ {maxWidth : "20vw", maxHeight : "20vh"}} />
                        </div>
                    })}

                </div>
            </div>
        </section>
    )
}

export default Section2