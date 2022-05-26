import React from "react";
import Accessories from "../accessories/Accessories";
import Banner from "./Banner";
import Reviews from "./Reviews";
import Summery from "./Summery";
import Support from "./Support";
import WhatsNew from "./WhatsNew";

const Home = () => {
  return (
    <div>
      <Banner />
      <Accessories />
      <Summery />
      <Reviews />
      <WhatsNew />
      <Support />
    </div>
  );
};

export default Home;
