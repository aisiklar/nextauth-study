"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { redirect } from "next/navigation";

export default function ClientComp() {
  const router = useRouter();

  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      // The user is not authenticated, handle it here.
      console.log("client comp, in unauthenticated prop.");
      router.push("/auth/login?callbackUrl=/client");
    },
  });

  console.log("session: ", session);
  console.log("status: ", status);

  return (
    <main>
      <div>rendered at client side!</div>
      <div></div>
    </main>
  );
}
