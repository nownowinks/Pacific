import React from 'react'

const Section1 = () => {
    return (
        <section className='heroSection'>
            <div className="row d-flex flex-row justify-content-between align-items-center  m-0 p-0">
                <div className="left col-12 col-md-6 p-4 ">
                    <h1 className='heroHeading'>Study Abroad:<br />
                        Gain Admission to Your Dream College
                    </h1>
                    <div className="container d-flex flex-md-row g-4">
                        <div className=" col-md-4 mx-2 fs-3">
                            <p className="heroText mb-0 pb-0">
                                2M+
                            </p>
                            <p className='fs-6 m-0 p-0'>Students</p>
                        </div>
                        <div className=" col-md-4 mx-2 fs-3">
                            <p className="heroText mb-0 pb-0">
                                240+
                            </p>
                            <p className='fs-6 m-0 p-0'>Expert Trainers</p>
                        </div>
                        <div className=" col-md-4 mx-2 fs-3 mb-4" >
                            <p className="heroText mb-0 pb-0">
                                600+
                            </p>
                            <p className='fs-6 m-0 p-0'>Partner Institutions</p>
                        </div>
                    </div>
                    <form >
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search bar"
                                aria-label="Search bar"
                                aria-describedby="button-addon2"
                                style={{ minHeight: "5rem" }}
                            />
                            <button
                                className="btn btn-outline-secondary"
                                type="button"
                                id="button-addon2"
                            >
                                Button
                            </button>
                        </div>
                    </form>
                    <p>
                    <a href="">Talk to our experts</a>
                    </p>
                </div>
                <div className="right col-12 col-md-6 p-4">
                    <img src="https://assets.kanan.co/website_v3/images/index/dream-college-abroad-new13.webp?w=1080&q=75" alt="" srcset="" className='heroImage ' />
                </div>
            </div>
        </section>
    )
}

export default Section1