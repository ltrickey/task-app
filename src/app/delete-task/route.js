export async function DELETE(request) {
  const { task } = await request.json();

  const deleteComplete = await fetch(
    `http://localhost:4000/tasks/${task.id}/`,
    {
      method: "DELETE",
    }
  );

  if (!deleteComplete.ok) {
    const responseOptions = {
      status: 401,
      statusText: "Failed to delete task!",
    };
    return new Response(null, responseOptions);
  }

  // TODO: different response?
  return new Response();
}
