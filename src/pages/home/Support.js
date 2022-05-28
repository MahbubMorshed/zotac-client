import React from "react";
import support from "../../images/support.jpg";
import { RiChatSettingsLine } from "react-icons/ri";
import { SiMaildotru } from "react-icons/si";
import { HiDocumentText } from "react-icons/hi";
import { FaDownload } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";
import { RiAwardFill } from "react-icons/ri";

const Support = () => {
  return (
    <div className="mt-5 mx-2">
      <h1 className="text-secondary text-center text-4xl font-bold mb-5">
        GET IN TOUCH
      </h1>
      <img src={support} />
      <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-2 my-5">
        <div className="card bg-gray-300 hover:bg-secondary hover:text-neutral">
          <div className="card-body">
            <RiChatSettingsLine className="text-4xl text-center mx-auto text-primary" />
            <h3 className="px-0 text-center">CHAT NOW!</h3>
            <small className="text-center">
              Get quick assistance with online chat. (English only)
            </small>
          </div>
        </div>
        <div className="card bg-gray-300 hover:bg-secondary hover:text-neutral">
          <div className="card-body">
            <SiMaildotru className="text-4xl text-center mx-auto text-primary" />
            <h3 className="px-0 text-center">CONTACT US</h3>
            <small className="text-center">How can we help?</small>
          </div>
        </div>
        <div className="card bg-gray-300 hover:bg-secondary hover:text-neutral">
          <div className="card-body">
            <HiDocumentText className="text-4xl text-center mx-auto text-primary" />
            <h3 className="px-0 text-center">PRODUCT REGISTRATION</h3>
            <small className="text-center">Register your new product.</small>
          </div>
        </div>
        <div className="card bg-gray-300 hover:bg-secondary hover:text-neutral">
          <div className="card-body">
            <FaDownload className="text-4xl text-center mx-auto text-primary" />
            <h3 className="px-0 text-center">DOWNLOAD CENTER</h3>
            <small className="text-center">
              Get the latest driver, software and product assets.
            </small>
          </div>
        </div>
        <div className="card bg-gray-300 hover:bg-secondary hover:text-neutral">
          <div className="card-body">
            <FaQuestionCircle className="text-4xl text-center mx-auto text-primary" />
            <h3 className="px-0 text-center">FAQ</h3>
            <small className="text-center">
              Find answers to the most asked questions.
            </small>
          </div>
        </div>
        <div className="card bg-gray-300 hover:bg-secondary hover:text-neutral">
          <div className="card-body">
            <RiAwardFill className="text-4xl text-center mx-auto text-primary" />
            <h3 className="px-0 text-center">WARRANTY</h3>
            <small className="text-center">
              Learn about our Product Warranty Policy.
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
