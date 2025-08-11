/*
  page rendered from route /list
*/

import { getTasks, getUser } from "../lib/dal";
import Logout from "../ui/logout-button";

export default async function TaskList() {
  const tasks = await getTasks();
  return (
    <div class="container mx-auto p-6 bg-white rounded-lg shadow-xl">
      <h3 className="text-xl text-gray-900 leading-tight pb-5">
        Current Tasks
      </h3>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title} : {task.description}{" "}
          </li>
        ))}
      </ul>
      <div class="mx-auto pt-6">
        <Logout />
      </div>
    </div>

    // todo have sub leaf client components to update, mark as complete, or add a new task
  );
}
