import React from "react";
import c from "./forgotPassword.module.css";
import Image from "next/image";
import Link from "next/link";
const ForgotPassword = () => {
  return (
    <div className={c.container}>
      <div className={c.login}>
        <div className={c.logo}>
          <Image src="/aret.png" alt="" layout="fill" />
        </div>
        <div className={c.form}>
          <input type="email" className={c.email} placeholder="Email" />
          {/* <input
            type="password"
            className={c.password}
            placeholder="Password"
          /> */}
          <button type="submit" className={c.button}>
            Login
          </button>
          <p className={c.text}>
            <Link href="/register">Register</Link>
            or <Link href="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
