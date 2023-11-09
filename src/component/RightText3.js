import React from 'react'

const RightText3 = () => {
    return (
        <section className='heroSection'>
            <div className="row d-flex flex-row justify-content-between align-items-center  m-0 p-0">
                <div className="left col-12 col-md-6 p-4 ">
                    <p>Kanan Study Abroad App
                    </p>
                    <h1 className='fs-2'>
                        Finish all your study abroad tasks and achieve your dreams with our expert help—reliable and fast!
                    </h1>
                    <ul>
                        <li>College applications</li>
                        <li>Study abroad exam prep</li>
                        <li>SOP writing, visa assistance and more</li>
                        <li>Free consultation</li>
                    </ul>
                    <button
                        className="btn btn-primary"
                        type="button"
                        id="button-addon2"
                    >
                        PlayStore
                    </button>
                    {/* <form >
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
                    </form> */}
                    {/* <p>
                        <a href="">Talk to our experts</a>
                    </p> */}
                </div>
                <div className="right col-12 col-md-6 p-4 ">
                    <img src="https://assets.kanan.co/website_v3/images/index/study-abroad-tasks-and-achieve.webp?w=1080&q=75" alt="" srcset="" />
                </div>
            </div>
        </section>
    )
}

export default RightText3;