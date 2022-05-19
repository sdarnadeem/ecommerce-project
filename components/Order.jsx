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
            <div className="item-desc">
              <div className="flex top">
                <h5>{"Dildo"}</h5>
                <h4>${"50"}</h4>
              </div>
              <div className="flex bottom">
                <div>
                  <p className="quantity-desc">
                    <span className="num">{12}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={c.product}>
          <div className="product">
            <img src={""} className="cart-product-image" />
            <div className="item-desc">
              <div className="flex top">
                <h5>{"Dildo"}</h5>
                <h4>${"50"}</h4>
              </div>
              <div className="flex bottom">
                <div>
                  <p className="quantity-desc">
                    <span className="num">{12}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={c.product}>
          <div className="product">
            <img src={""} className="cart-product-image" />
            <div className="item-desc">
              <div className="flex top">
                <h5>{"Dildo"}</h5>
                <h4>${"50"}</h4>
              </div>
              <div className="flex bottom">
                <div>
                  <p className="quantity-desc">
                    <span className="num">{12}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
