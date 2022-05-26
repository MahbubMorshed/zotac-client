import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { FaArtstation } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-secondary text-neutral  rounded">
      <div className="grid grid-flow-col gap-4">
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://www.linkedin.com/in/mahbub-morshed"
            className="fill-current text-3xl"
          >
            <AiFillLinkedin />
          </a>
          <a
            href="https://www.artstation.com/mahbub"
            className="fill-current text-3xl"
          >
            <FaArtstation />
          </a>
          <a
            href="https://github.com/MahbubMorshed"
            className="fill-current text-3xl"
          >
            <AiFillGithub />
          </a>
        </div>
      </div>
      <div>
        <p>Copyright © 2022 - All right reserved by ZOTAC</p>
      </div>
    </footer>
  );
};

export default Footer;
