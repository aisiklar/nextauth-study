

import Link from "next/link";
import LinkToHome from "./headerComponents/linkToHome";

export default function Header() {

  return (
    <main className="bg-slate-700 py-4">
      <div className="flex justify-between items-center">
        <div className="ml-2">
          <LinkToHome />
        </div>

        <div className="flex mt-2">
          <div className="mx-2 ">
            <Link href="/server"> Server Comp.</Link>
          </div>
          <div className="mx-2 ">
            <Link href="/client"> Client Comp.</Link>
          </div>
        </div>
        <div className="mr-10 flex items-center">
          <div>user info</div>
          <button className="ml-20 border rounded p-2">Signout</button>
        </div>
      </div>
    </main>
  );
}
