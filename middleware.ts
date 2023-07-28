console.log("in middleware");
export { default } from "next-auth/middleware";

export const config = { matcher: ["/dashboard", "/server"] };
