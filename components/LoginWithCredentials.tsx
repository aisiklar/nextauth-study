"use client";

import { ChangeEvent, FormEvent, useState } from "react";

export default function LoginWithCredentials() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  console.log("username, password: ", username, password);

  function receiveUsername(e: ChangeEvent<HTMLInputElement>) {
    setUsername(e.target.value);
  }
  function receivePassword(e: ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  function submitForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("form submit: ", username, password);
  }

  return (
    <main className="mt-10 mx-4">
      <form className="flex flex-col" onSubmit={submitForm}>
        <label className="mt-4">Username: </label>
        <input
          placeholder="username"
          type="text"
          value={username}
          onChange={receiveUsername}
          className="w-72  text-black"
        />
        <label className="mt-4">Password: </label>
        <input
          type="password"
          onChange={receivePassword}
          value={password}
          className="w-72 text-black"
        />
        <div className="flex mt-4">
          <button className="border rounded  w-20">Submit</button>
          <button
            onClick={() => {
              setPassword("");
              setUsername("");
            }}
            className=" mx-4 border rounded  w-20"
          >
            Reset
          </button>
        </div>
      </form>
    </main>
  );
}
