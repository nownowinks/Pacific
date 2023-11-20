import React from "react";

const RightText = () => {
  return (
    <section className="heroSection">
      <div className="row d-flex flex-row justify-content-between align-items-center  m-0 p-0">
        <div className="left col-12 col-md-6 p-4 ">
          <h1 className="fs-2">
            Test prep training by Experts <br /> for your Study Abroad journey
            Gain Admission to Your Dream College
          </h1>
          <p>Daily Live Classes | Simulated Mock Tests</p>
          <p>5 Full Length Tests | Speaking & Writing Evaluations</p>
        </div>
        <div class="container">
          <a href="#" class="button">
          Course1
          </a>
          <a href="#" class="button green">
          Course2
          </a>
          <a href="#" class="button blue">
          Course3
          </a>
          <a href="#" class="button yellow">
          Course4
          </a>
          <br />
          <a href="#" class="button red">
          Course5
          </a>
          <a href="#" class="button purple">
          Course6
          </a>
          <a href="#" class="button grey">
          Course7
          </a>
          <a href="#" class="button black">
          Course8
          </a>
        </div>

        <div className="right col-12 col-md-6 p-4 order-first">
          <img
            src="https://media.istockphoto.com/id/1291423053/vector/man-hand-lifting-up-a-school-boy-to-reach-for-the-star.jpg?s=612x612&w=0&k=20&c=QKabu2hW69VWyqb90BcQggcvRMcBrj_X2ZJ8fSMcAjw="
            alt=""
            srcset=""
          />
        </div>
      </div>
    </section>
  );
};

export default RightText;
