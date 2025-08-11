/*
  API route to login a user.  Called from the front end
  by hitting endpoint : /login
  this would be where we make the call to Auth0
*/
import { createSession } from "../lib/session";

export async function POST(request) {
  const { email, password } = await request.json();

  const res = await fetch("http://localhost:4000/users");

  if (!res.ok) {
    const responseOptions = { status: 401, statusText: "Failed to login" };
    return new Response(null, responseOptions);
  }

  const users = await res.json();
  let foundUser;

  for (const user of users) {
    if (user.email == email && user.password == password) {
      foundUser = user;
    }
  }

  if (!foundUser) {
    const responseOptions = { status: 401, statusText: "Invalid credentials" };
    return new Response(null, responseOptions);
  }
  console.log("Successful Login!");

  await createSession(foundUser.id);
  
  return Response.json({ message: "success" });
}
