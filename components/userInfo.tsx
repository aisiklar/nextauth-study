"use client";

import { useSession } from "next-auth/react";

export default function UserInfo() {
  const { data: session, status } = useSession();

  console.log("in userInfo session, status: ", session, status);

  return <main>user info</main>;
}
