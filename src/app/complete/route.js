export async function PATCH(request) {
  const { task } = await request.json();

  const updateComplete = await fetch(
    `http://localhost:4000/tasks/${task.id}/`,
    {
      method: "PATCH",
      body: JSON.stringify({
        done: !task.done, // right now setting done as false automatically.  TODO could add done tasks
      }),
    }
  );

  if (!updateComplete.ok) {
    console.log(updateComplete);
    const responseOptions = {
      status: 401,
      statusText: "Failed to update task!",
    };
    return new Response(null, responseOptions);
  }

  // TODO: different response?
  return new Response();
}
