export default function Signin() {
  return (
    <main className="width-max-20">
      <div className="flex justify-evenly">
        <button className="mt-4 border border-gray-200 rounded p-2">
          Sign-in with Gmail
        </button>
        <button className="mt-4 border border-gray-200 rounded p-2">
          Sign-in with Twitter
        </button>
        <button className="mt-4 border border-gray-200 rounded p-2">
          Sign-in with Github
        </button>
        <button className="mt-4 border border-gray-200 rounded p-2">
          Sign-in with Keycloak
        </button>
        <button className="mt-4 border border-gray-200 rounded p-2">
          Sign-in with e-mail
        </button>
      </div>
    </main>
  );
}
