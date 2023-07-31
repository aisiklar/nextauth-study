// to be worked on... 



// This is an example of how to read a JSON Web Token from an API route

import { getToken } from "next-auth/jwt"

export async function fetchToken(req, res) {
  // If you don't have NEXTAUTH_SECRET set, you will have to pass your secret as `secret` to `getToken`
  const token = await getToken({ req })
  if (token) {
    // Signed in
    console.log("JSON Web Token", JSON.stringify(token, null, 2))
    return token
  } else {
    // Not Signed in
    console.log(res.status(401))
    return null;
  }
  res.end()
}