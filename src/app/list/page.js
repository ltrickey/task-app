/*
  page rendered from route /list
*/

import { getTasks } from "../lib/dal";
import { AddTaskForm } from "../ui/add-task-form";
import { redirect } from "next/navigation";

import NavBar from "../components/NavBar";
import TaskListItems from "../components/TaskListItems";
import CompleteTask from "../ui/complete-form.js";
import EditTask from "../ui/edit-task-form";
import DeleteTask from "../ui/delete-task-form";

export default async function TaskList() {
  const tasks = await getTasks();
  if (!tasks) {
    redirect("/");
  } else {
    return (
      <>
        <NavBar />
        <div className="container mx-auto p-6 bg-white rounded-lg shadow-xl">
          <h3 className="text-lg text-gray-900 leading-tight m-4">
            Current Tasks
          </h3>
          <ul className="pb-3">
            <TaskListItems tasks={tasks} />
          </ul>
          {/* TODO: add Show complete, don't show complete - pass into task list items to show/hide */}
          <div className="border border-blue-500 rounded-sm lg:max-w-1/2 m-4 p-4">
            <AddTaskForm />
          </div>
        </div>
      </>
    );
  }
}
