import React, { useState } from "react";
import Image from "next/image";

import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";

import Cart from "./Cart";

import { useStateContext } from "../context/StateContext";
import Profile from "./Profile";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities, user } = useStateContext();
  const [showProfile, setShowProfile] = useState(false);

  const handleProfileClick = () => {
    setShowProfile((prev) => !prev);
  };
  return (
    <div className="navbar-container">
      <div className="logo-container">
        <Link href="/">
          <div className="logo">
            <Image src="/aret.png" alt="hello" layout="fill" />
          </div>
        </Link>
      </div>
      <button
        type="button"
        className="cart-icon"
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping />{" "}
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>
      {showCart && <Cart />}
      <div onClick={handleProfileClick} className="profile">
        {user && user.image && (
          <Image
            layout="fill"
            src={user.image}
            alt="profile"
            style={{ borderRadius: "50%" }}
          />
        )}
        {showProfile && <Profile />}
      </div>
    </div>
  );
};

export default Navbar;
