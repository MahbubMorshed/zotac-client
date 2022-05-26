import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Purchase from "../purshase/Purchase";
import { toast } from "react-toastify";

const PurchaseModal = ({ modal, setModal }) => {
  const { _id, name, description, image, quantity, stock, price } = modal;
  const [user, loading, error] = useAuthState(auth);

  const purchaseHandle = (event) => {
    event.preventDefault();
    const quantity = event.target.quantity.value;
    const order = {
      modalId: _id,
      modal: name,
      quantity,
      purchaser: user.email,
      purchaserName: user.displayName,
    };

    fetch("http://localhost:5000/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    setModal(null);
  };
  return (
    <div>
      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="purchase-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label
            htmlFor="purchase-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-bold text-lg">{name}</h3>
          <form
            onSubmit={purchaseHandle}
            className="grid grid-cols-1 gap-3 mt-6 justify-items-center"
          >
            <input
              type="text"
              name="name"
              disabled
              value={user?.displayName || ""}
              class="input input-bordered input-primary w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              disabled
              value={user?.email || ""}
              class="input input-bordered input-primary w-full max-w-xs"
            />
            <input
              type="number"
              name="quantity"
              // value={quantity}
              placeholder="Minimum puchase unit: 5"
              class="input input-bordered input-primary w-full max-w-xs"
            />
            <input
              type="number"
              disabled
              value={stock}
              class="input input-bordered input-primary w-full max-w-xs"
            />
            <input
              type="text"
              disabled
              value={price}
              class="input input-bordered input-primary w-full max-w-xs"
            />
            <input
              type="submit"
              value="Submit"
              class="btn btn-primary w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default PurchaseModal;
