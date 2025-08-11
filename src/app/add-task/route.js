
import { getUser } from "../lib/dal";

export async function POST(request) {

  const { title, description } = await request.json();
  const userId = getUser(); // TODO handle not logged in

  const res = await fetch("http://localhost:4000/tasks/", );

  const addTaskResult = await fetch("http://localhost:4000/tasks/", {
      method: "POST",
      body: JSON.stringify({ title: title, description: description }),
    });

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
  // TODO: different response?
  return Response.json({ message: "success" });
}