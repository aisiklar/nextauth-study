"use client";

import LoginWithCredentials from "@/components/LoginWithCredentials";
import { usePathname, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function Signin() {
  enum LoginMethod {
    none,
    keycloak,
    credentials,
    github,
    twitter,
  }
  const [signinMethod, setSigninMethod] = useState(LoginMethod.none);

  console.log("signin method: ", signinMethod);

  function setMethod(method: string) {
    if (signinMethod != LoginMethod.credentials) {
      if (method == "credentials") {
        setSigninMethod(LoginMethod.credentials);
      }
    } else {
      setSigninMethod(LoginMethod.none);
    }
  }

  // get searchparams?
  const url = usePathname();
  console.log("at signin page, url", url);

  const params = useSearchParams();
  let searchParams = params.get("callbackUrl");
  console.log("searchParams: ", searchParams, typeof searchParams);

  //const [callbackUrl, setCallbackUrl] = useState('');

  useEffect(() => {
    console.log("login page mounted");
  }, []);

  return (
    <main className="mt-20 width-max-20 ml-4">
      <p className="mb-10">Authenticate with one of the following:</p>
      <div className="flex">
        <button className="border border-gray-200 rounded p-2">
          Sign-in with Gmail
        </button>
        <button className="border border-gray-200 rounded p-2 ml-4">
          Sign-in with Twitter
        </button>
        <button className="border border-gray-200 rounded p-2 ml-4">
          Sign-in with Github
        </button>
        <button className="border border-gray-200 rounded p-2 ml-4">
          Sign-in with Keycloak
        </button>
        <button
          className="border border-gray-200 rounded p-2 ml-4"
          type="button"
          onClick={() => setMethod("credentials")}
        >
          Sign-in with credentials
        </button>
      </div>
      <div>
        {signinMethod == LoginMethod.credentials ? (
          <LoginWithCredentials callbackUrl={searchParams} />
        ) : null}
      </div>
    </main>
  );
}
