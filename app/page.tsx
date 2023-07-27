import Link from "next/link";

export default function Home() {
  return (
    <div>
      HOME PAGE
      <div>You dont need authentication to reach this page!</div>
      <div className="mt-10">
        <Link className="p-4 border rounded" href="/auth/login">
          proceed with authentication
        </Link>
      </div>
      <div className="mt-10">
        <Link className="p-4 border rounded" href="/dashboard">
          go to dashboard (needs authentication)
        </Link>
      </div>
    </div>
  );
}
