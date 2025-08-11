/*
  page rendered from route /list
*/

import { getTasks } from "../lib/dal";
import { AddTaskForm } from "../ui/add-task-form";
import Logout from "../ui/logout-button";
import CompleteTask from "../ui/complete-form.js";
import EditTask from "../ui/edit-task-form";

export default async function TaskList() {
  const tasks = await getTasks();

  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-xl">
      <h3 className="text-xl text-gray-900 leading-tight pb-5">
        Current Tasks
      </h3>
      <ul>
        {/* map each of these to it's own component, and use generateStaticParams */}
        {tasks.map((task) => (
          <li key={task.id}>
            <p className={task.done ? "line-through" : ""}>
              {task.title} : {task.description}
            </p>
            <EditTask task={task} />
            <CompleteTask task={task} />
          </li>
        ))}
      </ul>
      <div className="mx-auto pt-6">
        <AddTaskForm />
      </div>
      <div className="mx-auto pt-6">
        <Logout />
      </div>
    </div>

    // todo have sub leaf client components to update, mark as complete, or add a new task
  );
}
