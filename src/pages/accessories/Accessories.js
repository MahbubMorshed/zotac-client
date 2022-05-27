import React, { useEffect, useState } from "react";
import Product from "./Product";
import PurchaseModal from "./PurchaseModal";

const Accessories = () => {
  const [products, setProducts] = useState([]);
  const [modal, setModal] = useState(null);

  useEffect(() => {
    fetch("https://morning-meadow-49366.herokuapp.com/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <div className="">
        {products.map((product) => (
          <Product
            key={product._id}
            product={product}
            setModal={setModal}
          ></Product>
        ))}
      </div>
      {modal && <PurchaseModal modal={modal} setModal={setModal} />}
    </div>
  );
};

export default Accessories;
