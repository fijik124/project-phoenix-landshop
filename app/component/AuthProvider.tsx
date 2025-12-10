"use client";

import { SessionProvider } from "next-auth/react";
import React from "react";

/**
 * AuthProvider wraps the application or parts of the application
 * that need access to the session context (via useSession hook).
 * * It is a Client Component because next-auth/react components 
 * and hooks require client-side execution.
 */
export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SessionProvider>{children}</SessionProvider>;
}