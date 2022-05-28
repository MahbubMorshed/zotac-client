import React from "react";
import new1 from "../../images/3090ti.jpg";
import new2 from "../../images/1650.jpg";
import new3 from "../../images/2060.jpg";
import { Link } from "react-router-dom";

const WhatsNew = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 ">
      <div class="card bg-secondary text-neutral shadow-xl mt-5">
        <figure>
          <img src={new1} alt="Shoes" className="pt-3" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">
            ZOTAC GAMING GeForce RTX 3090 Ti AMP Extreme Holo
            <div class="badge badge-primary text-neutral">NEW</div>
          </h2>
          <p>
            <small>ZT-A30910B-10P</small>
          </p>
          <ul>
            <li>10752 Cores</li>
            <li>Boost: 1890 MHz</li>
            <li>24GB GDDR6X / 21 Gbps / 384-bit</li>
          </ul>
          <div class="card-actions justify-end">
            <Link to="/purchase">
              <div class="badge badge-primary text-neutral">Best Selling</div>
            </Link>
            <Link to="/purchase">
              <div class="badge badge-outline-primary">Purchase</div>
            </Link>
          </div>
        </div>
      </div>
      <div class="card bg-secondary text-neutral shadow-xl mt-5">
        <figure>
          <img src={new2} alt="Shoes" className="pt-3" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">
            ZOTAC GAMING GeForce GTX 1650 OC GDDR6
            <div class="badge badge-primary text-neutral">NEW</div>
          </h2>
          <p>
            <small>ZT-T16520F-10L</small>
          </p>
          <ul>
            <li>896 Cores</li>
            <li>Boost: 1620 MHz</li>
            <li>4GB GDDR6 / 12 Gbps / 128-bit</li>
          </ul>
          <div class="card-actions justify-end">
            <Link to="/purchase">
              <div class="badge badge-primary text-neutral">Best Selling</div>
            </Link>
            <Link to="/purchase">
              <div class="badge badge-outline-primary">Purchase</div>
            </Link>
          </div>
        </div>
      </div>
      <div class="card bg-secondary text-neutral shadow-xl mt-5">
        <figure>
          <img src={new3} alt="Shoes" className="pt-3" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">
            ZOTAC GAMING GeForce RTX 2060 Twin Fan
            <div class="badge badge-primary text-neutral">NEW</div>
          </h2>
          <p>
            <small>ZT-T20600F-10M</small>
          </p>
          <ul>
            <li>1920 Cores</li>
            <li>Boost: 1680 MHz</li>
            <li>6GB GDDR6 / 14.0 Gbps / 192-bit</li>
          </ul>
          <div class="card-actions justify-end">
            <Link to="/purchase">
              <div class="badge badge-primary text-neutral">Best Selling</div>
            </Link>
            <Link to="/purchase">
              <div class="badge badge-outline-primary">Purchase</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsNew;
