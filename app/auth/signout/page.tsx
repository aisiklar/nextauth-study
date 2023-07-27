import Link from "next/link";

export default function Signout() {
  return (
    <main>
      Sign-out completed
      <div className="mt-4">
        <Link className="border rounded p-4" href="/">
          go to home page
        </Link>
      </div>
    </main>
  );
}
