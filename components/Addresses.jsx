import React from "react";
import c from "./addresses.module.css";

const Addresses = () => {
  return (
    <div>
      <h2 className={c.heading}>Your Addresses(4)</h2>
      <div className={c.addresses}>
        <div className={c.address}>
          <p>Sagipora, sopore Jammu and Kashmir, India</p>
          <div>
            <button>del</button>
            <button>edit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addresses;
