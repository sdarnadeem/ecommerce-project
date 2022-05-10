import React from "react";
import c from "./profile.module.css";

const Profile = () => {
  return (
    <div className={c.profile}>
      <ul>
        <li>Your Orders</li>
        <li>Your profile</li>

        <li>Your addresses</li>
        <hr />
        <li>Logout</li>
      </ul>
    </div>
  );
};

export default Profile;
