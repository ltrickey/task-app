import { redirect } from "next/navigation";

export async function addTask(state, formData) {
  const title = formData.get("title");
  const description = formData.get("description");

  try {
    const addTaskResult = await fetch("/add-task", {
      method: "POST",
      body: JSON.stringify({ title: title, description: description }),
    });

    if (!addTaskResult.ok) {
      return {
        errors: ["Unable to Add Task"],
      };
    }
  } catch (err) {
    console.log("caught error: " + err); // TODO Render on UI?
  } finally {
    redirect("/list");
  }
}

export async function markComplete(task, state, formData) {
  try {
    const completeResult = await fetch("/complete", {
      method: "PATCH",
      body: JSON.stringify(task),
    });

    if (!completeResult.ok) {
      return {
        errors: ["Unable to Mark as " + complete],
      };
    }
  } catch (err) {
    console.log("caught error: " + err); // TODO Render on UI?
  } finally {
    redirect("/list");
  }
}

export async function deleteTask(task, state, formData) {
  try {
    const deleteResult = await fetch("/delete-task", {
      method: "DELETE",
      body: JSON.stringify(task),
    });

    if (!deleteResult.ok) {
      return {
        errors: ["Unable to delete task"],
      };
    }
  } catch (err) {
    console.log("caught error: " + err); // TODO Render on UI
  } finally {
    redirect("/list");
  }
}

export async function editTask(task, state, formData) {
  const title = formData.get("title");
  const description = formData.get("description");

  if (task.task.title == title && task.task.description == description) {
    redirect("/list");
  } else {
    console.log("about to send");
    try {
      const editResult = await fetch("/edit-task", {
        method: "PATCH",
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
