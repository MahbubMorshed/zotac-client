import React from "react";
import Reviews from "./Reviews";
import userImg1 from "../../images/userImg1.jpg";
import userImg2 from "../../images/userImg2.jpg";
import userImg3 from "../../images/userImg3.jpg";

const Testimonials = () => {
  const reviews = [
    {
      _id: 1,
      review: "dfkdfkjhdfjkdfj skjdvj",
      location: "dfgjdfjgfd",
      img: userImg1,
    },
    {
      _id: 2,
      review: "dfkdfkjhdfjkdfj skjdvj",
      location: "dfgjdfjgfd",
      img: userImg2,
    },
    {
      _id: 3,
      review: "dfkdfkjhdfjkdfj skjdvj",
      location: "dfgjdfjgfd",
      img: userImg3,
    },
  ];
  return (
    <div>
      <section className="mx-2">
        <h4 className="text-xl text-secondary font-bold text-center mt-5 mb-0">
          Testimonials
        </h4>
        <h2 className="text-3xl text-secondary font-bold text-center my-2">
          What our gamers say
        </h2>
        <div className="flex justify-between">
          <div></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review) => (
            <Reviews key={review._id} review={review}></Reviews>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
