import Router from "next/router";
import React, { useEffect, useState } from "react";
import Login from "../components/Login";

const LoginPage = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const response = await fetch("api/auth/login", {
        method: "POST",
      });
      if (response.status === 302) {
        Router.replace("/");
      }
    })();
    setLoading(false);
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
  return <>{!loading && <Login />}</>;
};

export default LoginPage;
