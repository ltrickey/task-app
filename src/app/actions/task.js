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
