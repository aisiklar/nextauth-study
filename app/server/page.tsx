import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import { getServerSession } from "next-auth/next";

export default async function ServerComp() {
  const session = await getServerSession(authOptions);
  if (session) {
    console.log("in server comp, session, status: ", session);
  }

  return (
    <main>
      <div>rendered at server side!</div>
      <div></div>
    </main>
  );
}
