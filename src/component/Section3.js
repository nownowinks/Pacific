import React from 'react'

const Section3 = (props) => {
    return (
        <section className="container-fluid bg-dark" >
            <p className='text-white text-center fs-1 fw-bold pt-4'> Courses Offered</p>
            <div className="d-flex flex-row align-items-center justify-content-start " style={{ overflowX: "scroll" }}>
                {props.courses.map((elem) => {
                    return <div className="col-12 col-md-3 me-3">
                        <div className="card mb-4">
                            <img src={elem} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                })}

            </div>
        </section>
    )
}

export default Section3