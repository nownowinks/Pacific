import React from 'react'

const RightText = () => {
    return (
        <section className='heroSection'>
            <div className="row d-flex flex-row justify-content-between align-items-center  m-0 p-0">
                <div className="left col-12 col-md-6 p-4 ">
                    <h1 className='fs-2'>
                        Test prep training by Experts <br /> for your Study Abroad journey Gain Admission to Your Dream College
                    </h1>
                    <p>Daily Live Classes | Simulated Mock Tests</p>
                    <p>5 Full Length Tests | Speaking & Writing Evaluations</p>
                    <div className="container d-flex flex-row flex-wrap ">
                        <a href="/" className="btn btn-primary col-4 m-2"> IELTS Academic</a>
                        <a href="/" className="btn btn-primary col-4 m-2"> IELTS General</a>
                        <a href="/" className="btn btn-primary col-4 m-2"> TOEFL-iBT</a>
                        <a href="/" className="btn btn-primary col-4 m-2"> GRE</a>
                        <a href="/" className="btn btn-primary col-4 m-2"> SAT</a>
                        <a href="/" className="btn btn-primary col-4 m-2"> PTE</a>
                        <a href="/" className="btn btn-primary col-4 m-2"> Duolingo</a>

                    </div>
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
                    <img src="https://assets.kanan.co/website_v3/images/index/prep-training-by-experts.webp?w=1080&q=75" alt="" srcset=""  />
                </div>
            </div>
        </section>
    )
}

export default RightText;