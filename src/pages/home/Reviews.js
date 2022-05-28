import React from "react";

const Reviews = ({ review }) => {
  return (
    <div className="card lg:max-w-lg bg-secondary shadow-xl">
      <div className="card-body">
        <div className="flex items-center">
          <div className="avatar">
            <div className="w-16 mr-5">
              <img src={review.img} alt="" />
            </div>
          </div>
          <div className=" text-neutral">
            <h4 className="text-xl">{review.review}</h4>
            <p>{review.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
