import Router from "next/router";
import React, { useState, useEffect } from "react";
import Register from "../components/Register";

const RegisterPage = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const response = await fetch("api/auth/login", {
        method: "POST",
      });

      if (response.status === 302) {
        setLoading(false);
        Router.replace("/");
      }
      setLoading(false);
    })();
  }, []);
  if (loading) {
    return (
      <h2
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          marginBottom: "70vh",
        }}
      >
        Loading...
      </h2>
    );
  }
  return <Register />;
};

export default RegisterPage;
