import React from "react";
import c from "./order.module.css";

const Order = () => {
  return (
    <div className={c.order} id="orders">
      <h2>Your Orders (3)</h2>
      <div className={c.orders}>
        <div className={c.product}>
          <div className="product">
            <img src={""} className="cart-product-image" />
            <div className={c.details}>
              <h3>
                Item Name: <span>Dilli</span>
              </h3>
              <h4>
                Address: <span>Dilli</span>
              </h4>
              <h4>
                Expected Delivery: <span>Dilli</span>
              </h4>
              <h4>
                Price per item: <span>Dilli</span>
              </h4>
              <h4>
                Number of items: <span>Dilli</span>
              </h4>
            </div>
          </div>
        </div>
        <div className={c.product}>
          <div className="product">
            <img src={""} className="cart-product-image" />
            <div className={c.details}>
              <h3>
                Item Name: <span>Dilli</span>
              </h3>
              <h4>
                Address: <span>Dilli</span>
              </h4>
              <h4>
                Expected Delivery: <span>Dilli</span>
              </h4>
              <h4>
                Price per item: <span>Dilli</span>
              </h4>
              <h4>
                Number of items: <span>Dilli</span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
