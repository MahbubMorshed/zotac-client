import React from "react";
import me from "../../images/me.png";
import { AiFillLinkedin } from "react-icons/ai";
import { FaArtstation } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";

const Portfolio = () => {
  return (
    <div>
      <div class="hero min-h-screen bg-secondary my-2 mx-2 tracking-wider">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src={me} class="max-w-sm rounded-lg w-2/4 shadow-2xl" />
          <div className="w-2/4 text-neutral">
            <h1 className="text-4xl font-bold">I'm MAHBUB MORSHED</h1>
            <p className="text-2xl py-4">
              Interactive Developer and 3D Artist based in Bangladesh{" "}
            </p>
            <p className="text-xl">
              I am personally so motivated regarding my work, and I always try
              my best to achieve goals and objectives.
            </p>
            <p className="text-3xl font-bold my-2 text-center">Services:</p>
            <ul>
              <li className="text-2xl mb-2">
                <span className="text-2xl font-bold">Web Developer:</span>{" "}
                Python(Django), javaScript(React), scss.
              </li>
              <li className="text-2xl mb-2">
                <span className="text-2xl font-bold">3D Artist:</span> Highly
                Skilled in Maya Blender and Unity
              </li>
            </ul>
            <p>
              3D animation, 3D modelling, game designing, game asset for Unity
              and specially in low poly and high poly modelling.
            </p>
            <h3 className="text-3xl mt-5 underline hover:decoration-1">
              Social Portfolio:
            </h3>
            <div className="flex justify-evenly pt-5 gap-4">
              <a
                href="https://www.linkedin.com/in/mahbub-morshed"
                className="fill-current text-3xl hover:text-primary"
              >
                <AiFillLinkedin />
              </a>
              <a
                href="https://www.artstation.com/mahbub"
                className="fill-current text-3xl hover:text-primary"
              >
                <FaArtstation />
              </a>
              <a
                href="https://github.com/MahbubMorshed"
                className="fill-current text-3xl hover:text-primary"
              >
                <AiFillGithub />
              </a>
              <a
                href="https://www.facebook.com/mahbub.morshed.1004"
                className="fill-current text-3xl hover:text-primary"
              >
                <AiOutlineFacebook />
              </a>
            </div>
            <h3 className="text-3xl mt-5 underline hover:decoration-1">
              Live Site Link:
            </h3>
            <div className="flex justify-evenly pt-5 gap-4">
              <a
                href="https://liraartbd.com/"
                className="fill-current text-2xl hover:text-primary"
              >
                LiraArtBd
              </a>
              <a
                href="https://assignment11-5c7c1.web.app/"
                className="fill-current text-2xl hover:text-primary"
              >
                Example
              </a>
              <a
                href="https://assignment11-5c7c1.web.app/"
                className="fill-current text-2xl hover:text-primary"
              >
                Example
              </a>
            </div>
            <h3 className="text-3xl mt-5 underline hover:decoration-1">
              3D ART WORK:
            </h3>
            <div className="flex justify-evenly pt-5 gap-4">
              <a
                href="https://www.artstation.com/mahbub/"
                className="fill-current text-2xl hover:text-primary"
              >
                Art Station
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
