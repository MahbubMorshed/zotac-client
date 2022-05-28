import React from "react";
import Accessories from "../accessories/Accessories";
import Banner from "./Banner";
import Reviews from "./Reviews";
import Summery from "./Summery";
import Support from "./Support";
import Testimonials from "./Testimonials";
import WhatsNew from "./WhatsNew";

const Home = () => {
  return (
    <div>
      <Banner />
      <Accessories />
      <Summery />
      <Testimonials />
      <WhatsNew />
      <Support />
    </div>
  );
};

export default Home;
