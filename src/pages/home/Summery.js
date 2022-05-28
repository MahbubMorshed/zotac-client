import React from "react";
import { FaAward } from "react-icons/fa";
import { VscFeedback } from "react-icons/vsc";
import { BsBarChartLineFill } from "react-icons/bs";
import { BsCpuFill } from "react-icons/bs";

const Summery = () => {
  return (
    <div>
      <h1 className="text-4xl text-secondary font-bold text-center mb-4">
        Millions of business trusted{" "}
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 mx-2 my-2">
        <div className="card bg-secondary text-neutral text-center">
          <div className="card-body">
            <FaAward className="text-4xl text-center mx-auto" />
            <h2 className="text-2xl text-center">HoloBlack awards</h2>
            <p>
              The Zotac GeForce RTX 3080 Ti AMP HoloBlack is the company's top
              graphics card.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-sm btn-primary">contact us</button>
            </div>
          </div>
        </div>
        <div className="card bg-secondary text-neutral text-center ">
          <div className="card-body">
            <VscFeedback className="text-4xl text-center mx-auto" />
            <h2 className="text-2xl text-center">Feedback</h2>
            <p>Million of satisfied users feedback with us</p>
            <div className="card-actions justify-end">
              <button className="btn btn-sm btn-primary">contact us</button>
            </div>
          </div>
        </div>
        <div className="card bg-secondary text-neutral text-center ">
          <div className="card-body">
            <BsBarChartLineFill className="text-4xl text-center mx-auto" />
            <h2 className="text-2xl text-center">Revenue</h2>
            <p>100+ Million yearly revenue</p>
            <div className="card-actions justify-end">
              <button className="btn btn-sm btn-primary">contact us</button>
            </div>
          </div>
        </div>
        <div className="card bg-secondary text-neutral text-center ">
          <div className="card-body">
            <BsCpuFill className="text-4xl text-center mx-auto" />
            <h2 className="text-2xl text-center">Warranty</h2>
            <p>Customer feel secure with 5 years of warranty.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-sm btn-primary">contact us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summery;
