import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product, setModal }) => {
  const { name, description, image, quantity, stock, price } = product;

  return (
    <div className="flex justify-center w-4/5 mx-auto my-4 ">
      <div className="card lg:card-side bg-secondary shadow-xl border-solid border-2 border-secondary">
        <img src={image} alt="Album" />

        <div className="flex flex-col card-body text-neutral">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <p className="text-xl my-2">Minimum order quantity: {quantity}</p>
          <p className="text-xl my-2">Product In Stock: {stock}</p>
          <p className="text-xl my-2">Unit Price: {price}</p>
          <div className="card-actions justify-end">
            <Link to="/purchase">
              <button className="btn btn-neutral">purchase</button>
            </Link>

            {/* <label
              htmlFor="purchase-modal"
              className="btn btn-primary uppercase text-neutral"
              onClick={() => setModal(product)}
            >
              purchase
            </label> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
