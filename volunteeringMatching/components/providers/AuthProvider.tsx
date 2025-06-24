"use client";

import React from "react";
import { MsalProvider } from "@azure/msal-react";
import { msalInstance } from "../../lib/msalClient";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  return <MsalProvider instance={msalInstance}>{children}</MsalProvider>;
};

export default AuthProvider;
