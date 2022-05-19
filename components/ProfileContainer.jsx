import Link from "next/link";
import React from "react";
import Addresses from "./Addresses";
import Order from "./Order";
import PProfile from "./PProfile";
import c from "./profileContainer.module.css";

const ProfileContainer = () => {
  return (
    <div className={c.profileContainer}>
      <div className={c.sidebar}>
        <Link href="#orders">Orders</Link>
        <Link href="#addresses">Addresses</Link>
        <Link href="#profile">Profile</Link>
        <p>Logout</p>
      </div>
      <hr />
      <div className={c.details}>
        <Order />
        <Addresses />
        <PProfile />
      </div>
    </div>
  );
};

export default ProfileContainer;
