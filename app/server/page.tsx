import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import { getServerSession } from "next-auth/next";
import { fetchToken } from "../api/token/route";
import { redirect } from "next/navigation";

export default async function ServerComp() {
  const session = await getServerSession(authOptions);
  
  if (session) {
    console.log("in server comp, session, status: ", session);
  } else {
    console.log("redirecting to login page");
    redirect("/auth/login?callbackUrl=/server");
  }

  //console.log(fetchToken(req, res));

  return (
    <main>
      <div>rendered at server side!</div>
      <div></div>
    </main>
  );
}
