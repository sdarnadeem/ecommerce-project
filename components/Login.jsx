import React, { useRef, useState, useEffect } from "react";
import c from "./login.module.css";
import Image from "next/image";
import Link from "next/link";
import Router from "next/router";

import { useStateContext } from "../context/StateContext";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState(null);

  const { onAuth } = useStateContext();

  const submitHandler = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (email === "") {
      return setError("Email can't be empty");
    }
    if (password === "") {
      return setError("Password can't be empty");
    }

    setError(null);

    try {
      const response = await fetch("api/auth/login", {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();
      setError(data.message);

      if (response.status === 302) {
        Router.replace("/");
        onAuth(data.data.user);
        console.log(data, response);
      }
    } catch (e) {
      // console.log(error);
      // setError(e.message);
    }
  };

  return (
    <div className={c.container}>
      <div className={c.login}>
        <div className={c.logo}>
          <Image src="/aret.png" alt="" layout="fill" />
        </div>
        <div className={c.form}>
          <form onSubmit={submitHandler}>
            <input
              type="email"
              className={c.email}
              placeholder="Email"
              ref={emailRef}
            />
            <input
              type="password"
              className={c.password}
              placeholder="Password"
              ref={passwordRef}
            />
            {error && <p className={c.error}>{error}</p>}
            <button type="submit" className={c.button}>
              Login
            </button>
          </form>
          <p className={c.text}>
            Dont have an account, <Link href="/register">Register</Link>
          </p>
          <Link href="/forgot-password">Forgot Password</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
