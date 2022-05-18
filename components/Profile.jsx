import Link from "next/link";
import React from "react";
import c from "./profile.module.css";
import { useStateContext } from "../context/StateContext";

const Profile = () => {
  const { onLogout, isLogged, user } = useStateContext();
  console.log(isLogged);
  return (
    <div className={c.profile}>
      <ul>
        {isLogged && (
          <>
            <li>
              <Link href="/">Your Orders</Link>
            </li>
            <li>
              <Link href="/">Your Profile</Link>
            </li>

            <li>
              <Link href="/">Your Addresses</Link>
            </li>
            <hr />
            <li>
              <Link href="/">
                <p onClick={onLogout}>Logout</p>
              </Link>
            </li>
          </>
        )}
        {!isLogged && (
          <>
            <li>
              <Link href="/login">Login</Link>
            </li>
            <li>
              <Link href="/register">Create Account</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Profile;
