"use client";
import { useSession } from "next-auth/react";

export default function UserInfo() {
  const { data: session, status } = useSession();

  return <div>{session ? "logged in" : "not logged in"}</div>;
}
