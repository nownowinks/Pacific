import React from "react";
import Section2 from "../component/Section2";
import { useState } from "react";
import Section3 from "../component/Section3";
import Gradient from "../component/Gradient";
import Section4 from "../component/Section4";
import Section1 from "../component/Section1";
import RightText from "../component/RightText";
import RightText2 from "../component/RightText2";
import RightText3 from "../component/RightText3";
import RightText4 from "../component/RightText4";
import Title from "../component/Title";
import TitleContainer from "../component/utility/TitleContainer";
import Section8 from "../component/Section8";

const Homepage = () => {
  const countries = [
    "https://imgs.search.brave.com/WRAfSoHc_cmCxLSOWsHatdN_b6fQwD8FwcgdiCpJYBc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LmluZm8vaW1h/Z2VzL21pbmljb3Zl/cnMvMTU1OTg1NjUy/MVVuaXRlZC1TdGF0/ZXMtb2YtQW1lcmlj/YS1MYXJnZS1GbGFn/LnBuZw",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/1200px-Flag_of_Europe.svg.png",
    "https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/1024px-Flag_of_Italy.svg.png",
    "https://imgs.search.brave.com/WRAfSoHc_cmCxLSOWsHatdN_b6fQwD8FwcgdiCpJYBc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LmluZm8vaW1h/Z2VzL21pbmljb3Zl/cnMvMTU1OTg1NjUy/MVVuaXRlZC1TdGF0/ZXMtb2YtQW1lcmlj/YS1MYXJnZS1GbGFn/LnBuZw",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/1200px-Flag_of_Europe.svg.png",
  ];
  const courses = [
    "https://imgs.search.brave.com/52yAjB7OLxIEKcXPMeojVM55DJQ4c8-eVv5I8kUDlBc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC84Ni82Ny9s/YW5kc2NhcGUtcGhv/dG8taW1hZ2Utb3It/cGljdHVyZS1wbGFj/ZWhvbGRlci1mbGF0/LXZlY3Rvci0yOTAw/ODY2Ny5qcGc",
    "https://imgs.search.brave.com/52yAjB7OLxIEKcXPMeojVM55DJQ4c8-eVv5I8kUDlBc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC84Ni82Ny9s/YW5kc2NhcGUtcGhv/dG8taW1hZ2Utb3It/cGljdHVyZS1wbGFj/ZWhvbGRlci1mbGF0/LXZlY3Rvci0yOTAw/ODY2Ny5qcGc",
    "https://imgs.search.brave.com/52yAjB7OLxIEKcXPMeojVM55DJQ4c8-eVv5I8kUDlBc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC84Ni82Ny9s/YW5kc2NhcGUtcGhv/dG8taW1hZ2Utb3It/cGljdHVyZS1wbGFj/ZWhvbGRlci1mbGF0/LXZlY3Rvci0yOTAw/ODY2Ny5qcGc",
    "https://imgs.search.brave.com/52yAjB7OLxIEKcXPMeojVM55DJQ4c8-eVv5I8kUDlBc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC84Ni82Ny9s/YW5kc2NhcGUtcGhv/dG8taW1hZ2Utb3It/cGljdHVyZS1wbGFj/ZWhvbGRlci1mbGF0/LXZlY3Rvci0yOTAw/ODY2Ny5qcGc",
  ];

  return (
    <div>
      <Section1 />
      <Section2 countries={countries} />
      <RightText />
      <Title />
      <Section8 />
      <RightText2 />
      <TitleContainer
        heading={"Value Added Services"}
        subHeading={
          "Make your study abroad journey hassle-free with our range of services."
        }
      />
      <section>
        <div className="container d-flex flex-wrap">
          <a href="/" className="btn btn-primary m-3">
            Scholarship
          </a>
          <a href="/" className="btn btn-primary m-3">
            Accommodation
          </a>
          <a href="/" className="btn btn-primary m-3">
            SIM Card
          </a>
          <a href="/" className="btn btn-primary m-3">
            Visa Assistance
          </a>
          <a href="/" className="btn btn-primary m-3">
            Travel Insurance
          </a>
          <a href="/" className="btn btn-primary m-3">
            Know your score
          </a>
        </div>
      </section>
      <RightText3 />

      <TitleContainer />
      <RightText4 />
      <Section3 courses={courses} />

      <Gradient />
      <Section4 />
    </div>
  );
};

export default Homepage;
