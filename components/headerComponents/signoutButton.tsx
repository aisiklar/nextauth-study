"use client";
import { useSession } from "next-auth/react";

import { signOut } from "next-auth/react";

export default function SignOutButton() {
  const { data: session, status } = useSession();

  return (
    <div>
      {session ? (
        <button
          onClick={() =>
            signOut({ callbackUrl: "http://localhost:3000/auth/signout" })
          }
          className="ml-20 border rounded p-2"
        >
          Signout
        </button>
      ) : null}
    </div>
  );
}
