"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function ClientComp() {
  const router = useRouter();

  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      // The user is not authenticated, handle it here.
      console.log("in unauthentcated prop.");
      router.push("/auth/login");
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
