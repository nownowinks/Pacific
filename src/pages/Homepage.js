import React from 'react'
import Section2 from '../component/Section2';
import { useState } from 'react';
import Section3 from '../component/Section3';
import Gradient from '../component/Gradient';
import Section4 from '../component/Section4';
import Section1 from '../component/Section1';
import RightText from '../component/RightText';
import RightText2 from '../component/RightText2';
import RightText3 from '../component/RightText3';
import RightText4 from '../component/RightText4';
import Title from '../component/Title';
import TitleContainer from '../component/utility/TitleContainer';

const Homepage = () => {
    const countries = ['https://imgs.search.brave.com/WRAfSoHc_cmCxLSOWsHatdN_b6fQwD8FwcgdiCpJYBc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LmluZm8vaW1h/Z2VzL21pbmljb3Zl/cnMvMTU1OTg1NjUy/MVVuaXRlZC1TdGF0/ZXMtb2YtQW1lcmlj/YS1MYXJnZS1GbGFn/LnBuZw', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/1200px-Flag_of_Europe.svg.png', 'https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/1024px-Flag_of_Italy.svg.png', 'https://imgs.search.brave.com/WRAfSoHc_cmCxLSOWsHatdN_b6fQwD8FwcgdiCpJYBc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LmluZm8vaW1h/Z2VzL21pbmljb3Zl/cnMvMTU1OTg1NjUy/MVVuaXRlZC1TdGF0/ZXMtb2YtQW1lcmlj/YS1MYXJnZS1GbGFn/LnBuZw', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/1200px-Flag_of_Europe.svg.png']
    const courses = ['https://imgs.search.brave.com/52yAjB7OLxIEKcXPMeojVM55DJQ4c8-eVv5I8kUDlBc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC84Ni82Ny9s/YW5kc2NhcGUtcGhv/dG8taW1hZ2Utb3It/cGljdHVyZS1wbGFj/ZWhvbGRlci1mbGF0/LXZlY3Rvci0yOTAw/ODY2Ny5qcGc', 'https://imgs.search.brave.com/52yAjB7OLxIEKcXPMeojVM55DJQ4c8-eVv5I8kUDlBc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC84Ni82Ny9s/YW5kc2NhcGUtcGhv/dG8taW1hZ2Utb3It/cGljdHVyZS1wbGFj/ZWhvbGRlci1mbGF0/LXZlY3Rvci0yOTAw/ODY2Ny5qcGc', 'https://imgs.search.brave.com/52yAjB7OLxIEKcXPMeojVM55DJQ4c8-eVv5I8kUDlBc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC84Ni82Ny9s/YW5kc2NhcGUtcGhv/dG8taW1hZ2Utb3It/cGljdHVyZS1wbGFj/ZWhvbGRlci1mbGF0/LXZlY3Rvci0yOTAw/ODY2Ny5qcGc', 'https://imgs.search.brave.com/52yAjB7OLxIEKcXPMeojVM55DJQ4c8-eVv5I8kUDlBc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC84Ni82Ny9s/YW5kc2NhcGUtcGhv/dG8taW1hZ2Utb3It/cGljdHVyZS1wbGFj/ZWhvbGRlci1mbGF0/LXZlY3Rvci0yOTAw/ODY2Ny5qcGc']


    return (
        <div>
            <Section1 />
            <Section2 countries={countries} />
            <RightText />
            <Title />
            <RightText2 />
            <TitleContainer heading={"Value Added Services"} subHeading={"Make your study abroad journey hassle-free with our range of services."} />
            <section>
                <div className="container d-flex flex-wrap">
                    <a href="/" className="btn btn-primary m-3">Scholarship</a>
                    <a href="/" className="btn btn-primary m-3">Accommodation</a>
                    <a href="/" className="btn btn-primary m-3">SIM Card</a>
                    <a href="/" className="btn btn-primary m-3">Visa Assistance</a>
                    <a href="/" className="btn btn-primary m-3">Travel Insurance</a>
                    <a href="/" className="btn btn-primary m-3">Know your score</a>
                </div>
            </section>
            <RightText3 />
            
            <TitleContainer heading={"Let’s hear from our Students"} subHeading={"Our students send us bunch of smilies with our services and we love them"} />
            <section className='mb-4'>
                <div id="carouselExampleCaptions" className="carousel slide">
                    <div className="carousel-indicators">
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to={0}
                            className="active"
                            aria-current="true"
                            aria-label="Slide 1"
                        />
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to={1}
                            aria-label="Slide 2"
                        />
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to={2}
                            aria-label="Slide 3"
                        />
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://assets.kanan.co/website_v3/images/testimonial/shrutva_patel.png?w=384&q=75" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Shivam</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="https://assets.kanan.co/website_v3/images/testimonial/shrutva_patel.png?w=384&q=75" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="https://assets.kanan.co/website_v3/images/testimonial/shrutva_patel.png?w=384&q=75" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

            </section>
            <RightText4 />
            <Section3 courses={courses} />
            <Gradient />
            <Section4 />
        </div>
    )
}

export default Homepage