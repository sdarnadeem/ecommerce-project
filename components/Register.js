import React, { useRef, useState } from "react";
import FileBase64 from "react-file-base64";

import Image from "next/image";
import Link from "next/link";

import c from "./register.module.css";

const Register = () => {
  const [error, setError] = useState();
  const [image, setImage] = useState();
  const nameRef = useRef();
  const emailRef = useRef();
  const mobileRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const number = mobileRef.current.value;
    const password = passwordRef.current.value;
    const passwordConfirm = passwordConfirmRef.current.value;

    console.log(image);

    if (name === "") {
      return setError("Name can not be empty");
    } else if (email === "") {
      return setError("Email can not be empty");
    } else if (number === "") {
      return setError("Number can not be empty");
    } else if (password === "") {
      return setError("Password can not be empty");
    } else if (passwordConfirm === "") {
      return setError("Confirm Password can not be empty");
    }

    if (password !== passwordConfirm) {
      return setError("Confirm Password does not match the password");
    }

    if (password.length < 8) {
      return setError("Password must be at least 8 characters");
    }

    setError(null);

    try {
      const response = await fetch("api/auth/register", {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          password,
          passwordConfirm,
          number,
          image: image.base64,
        }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={c.container}>
      <div className={c.registration}>
        <div className={c.logo}>
          <Image src="/aret.png" alt="" layout="fill" />
        </div>
        <form onSubmit={handleSubmit} className={c.form}>
          <input
            type="text"
            className={c.name}
            placeholder="Name"
            ref={nameRef}
          />
          <input
            type="email"
            className={c.email}
            placeholder="Email"
            ref={emailRef}
          />
          <input
            type="text"
            className={c.number}
            placeholder="Mobile Number"
            ref={mobileRef}
          />
          <input
            type="password"
            className={c.password}
            placeholder="Password"
            ref={passwordRef}
          />
          <input
            type="password"
            className={c.passwordConfirm}
            placeholder="Confirm Password"
            ref={passwordConfirmRef}
          />
          <div className={c.file}>
            <label htmlFor="file">Profile Picture</label>
            <FileBase64
              type="file"
              id="file"
              multiple={false}
              onDone={(file) => setImage(file)}
            />
          </div>
          {error && <p>{error}</p>}
          <button type="submit" className={c.button}>
            Create Account
          </button>
          <p className={c.text}>
            Already have an account, <Link href="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
