import React from 'react'

const RightText2 = () => {
    
    return (
        <section className='heroSection'>
            <div className="row d-flex flex-row justify-content-between align-items-center  m-0 p-0">
                <div className="left col-12 col-md-6 p-4 ">
                    <h1 className='fs-2'>
                        Educational Loans for your Study Abroad Journey Simplified
                    </h1>
                    <p>Daily Live Classes | Simulated Mock Tests</p>
                    <p>5 Full Length Tests | Speaking & Writing Evaluations</p>
                    <ul>
                        <li>Flexible & Competitive Interest rates</li>
                        <li>Supports all Majors, Degree & Diplomas</li>
                        <li>Quick approval within 3 working days</li>
                        <li>Loan Tenure upto 15 years</li>
                        <li>Personal Advisor for you exclusively for Guidance</li>
                    </ul>
                    <button
                        className="btn btn-primary"
                        type="button"
                        id="button-addon2"
                    >
                        Button
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
                <div className="right col-12 col-md-6 p-4 order-first">
                    <img src="https://assets.kanan.co/website_v3/images/index/education-loan.webp?w=1080&q=75" alt="" srcset="" />
                </div>
            </div>
        </section>
    )
}

export default RightText2;