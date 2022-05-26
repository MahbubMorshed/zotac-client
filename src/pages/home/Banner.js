import React from "react";
import caro1 from "../../images/caro1.jpg";
import caro2 from "../../images/caro2.jpg";
import caro3 from "../../images/caro3.jpg";
import caro4 from "../../images/caro4.jpg";
import caro5 from "../../images/caro5.jpg";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img src={caro1} className="w-full" />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img src={caro2} className="w-full" />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img src={caro3} className="w-full" />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img src={caro4} className="w-full" />
        </div>
        <div id="item5" className="carousel-item w-full">
          <img src={caro5} className="w-full" />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
        <a href="#item5" className="btn btn-xs">
          5
        </a>
      </div>
    </div>
  );
};

export default Banner;
