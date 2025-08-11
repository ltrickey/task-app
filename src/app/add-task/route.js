import { getUser } from "../lib/dal";
import { redirect } from "next/navigation";

export async function POST(request) {
  const { title, description } = await request.json();
  const userId = getUser();

  if (!userId) {
    redirect("/");
  }

  const addTaskResult = await fetch("http://localhost:4000/tasks/", {
    method: "POST",
    body: JSON.stringify({
      userId: userId,
      title: title,
      description: description,
      done: false, // right now setting done as false automatically.  TODO could add done tasks
    }),
  });

  if (!addTaskResult.ok) {
    const responseOptions = { status: 401, statusText: "Failed to add task!" };
    return new Response(null, responseOptions);
  }

  return new Response();
}
