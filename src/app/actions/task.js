import { redirect } from "next/navigation";

export async function addTask(state, formData) {
  const title = formData.get("title");
  const description = formData.get("description");

  try {
    const addTaskResult = await fetch("/add-task", {
      method: "POST",
      body: JSON.stringify({ title: title, description: description }),
    });

    //TODO: handle error better
    if (!addTaskResult.ok) {
      return {
        errors: ["Unable to Add Task"],
      };
    }
    //redirect("/");
  } catch (err) {
    console.log("caught error: " + err);
  } finally {
    redirect("/list");
  }
}

export async function markComplete(task, state, formData) {
  // todo, only send relevant parts of task
  try {
    // TODO: change this to PUT
    const completeResult = await fetch("/complete", {
      method: "POST",
      body: JSON.stringify(task),
    });

    if (!completeResult.ok) {
      return {
        errors: ["Unable to Mark as " + complete],
      };
    }
  } catch (err) {
    console.log("caught error: " + err);
  } finally {
    redirect("/list");
  }
}

export async function editTask(task, state, formData) {
  const title = formData.get("title");
  const description = formData.get("description");
 
  if (task.task.title == title && task.task.description == description) {
    return {
      errors: ["No change found"],
    };
  } else {
    console.log("about to send");
    try {
      const editResult = await fetch("/edit-task", {
        method: "POST",
        body: JSON.stringify({
          original: task.task,
          title: title,
          description: description,
        }),
      });

      if (!editResult.ok) {
        return {
          errors: ["Unable to edit task"],
        };
      }
    } catch (err) {
      console.log("caught error: " + err);
    } finally {
      redirect("/list");
    }
  }
}
