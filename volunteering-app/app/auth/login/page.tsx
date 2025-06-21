"use client";

import React, { useEffect } from "react";
import { useMsal } from "@azure/msal-react";

const LoginPage = () => {
  const { instance } = useMsal();

  useEffect(() => {
    instance.loginRedirect().catch((e) => {
      console.error("Login failed:", e);
    });
  }, [instance]);
  

  return <p>Redirecting to Azure AD login...</p>;
};

export default LoginPage;
