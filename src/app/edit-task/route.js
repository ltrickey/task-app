export async function PATCH(request) {
  const { original, title, description } = await request.json();

  const updateComplete = await fetch(
    `http://localhost:4000/tasks/${original.id}/`,
    {
      method: "PUT",
      body: JSON.stringify({
        title: title,
        description: description,
        done: original.done,
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

  return new Response();
}
