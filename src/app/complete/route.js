export async function POST(request) {
  console.log("INSIDE POST /COMPLETE");
  const { task } = await request.json();
  // const userId = getUser(); // TODO handle not logged in
  // const taskIdString = taskId.body.;
  console.log(task);
  // console.log("butt" + id);
  // calling json-server
  // {
  //     "userId": 1,
  //     "id": 1,
  //     "title": "Walk Dog",
  //     "description": "Walk the dog around the block",
  //     "done": false
  //   },
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
