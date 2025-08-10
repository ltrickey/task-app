import { createSession } from "../lib/session";

export async function POST(request) {
  const { email, password } = await req.json();
  const res = await fetch("http://localhost:4000/users");

  const response = new Response();
  if (!res.ok) {
    return response.status(401).json({ message: "Failed to login" });
  }

  const users = await res.json();
  let foundUser;

  for (const user of users) {
    if (user.email == email && user.password == password) {
      // set loged in
      foundUser = user;
    }
  }

  if (!foundUser) {
    return response.status(401).json({ message: "Invalid credentials" });
  }
  console.log("Successful Login!");

  await createSession(foundUser.id);
  return response.status(200); // TOODO: Do i need to send the cookie??
}
