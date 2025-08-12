/*
  page rendered from route /list
*/

import { getTasks } from "../lib/dal";
import { AddTaskForm } from "../ui/add-task-form";
import Logout from "../ui/logout-button";
import CompleteTask from "../ui/complete-form.js";
import EditTask from "../ui/edit-task-form";
import DeleteTask from "../ui/delete-task-form";
import { redirect } from "next/navigation";

export default async function TaskList() {
  const tasks = await getTasks();
  if (!tasks) {
    redirect("/");
  } else {
    return (
      <div className="container mx-auto p-6 bg-white rounded-lg shadow-xl">
        <h3 className="text-xl text-gray-900 leading-tight m-4">
          Current Tasks
        </h3>
        <ul className="pb-3">
          {/* map each of these to it's own component, and use generateStaticParams */}
          {tasks.map(
            (task) =>
              !task.done && (
                <li
                  className="hover:bg-blue-100 border border-blue-500 rounded-sm lg:max-w-3/4 m-4 p-2"
                  key={task.id}
                >
                  <div className="flex flex-row">
                    <p
                      className={
                        task.done ? "flex-auto line-through" : "flex-auto"
                      }
                    >
                      {task.title} : {task.description}
                    </p>
                    <div className="flex-auto">
                      <div className="flex flex-row flex-wrap justify-end-safe gap-2">
                        <CompleteTask task={task} className="" />
                        <EditTask task={task} className="" />
                        <DeleteTask task={task} className="" />
                      </div>
                    </div>
                  </div>
                </li>
              )
          )}
          {/* Complete tasks */}
          {tasks.map(
            (task) =>
              task.done && (
                <li
                  className="border border-blue-500 rounded-sm md:max-w-3/4 lg:max-w-3/4 m-4 p-2"
                  key={task.id}
                >
                  <div className="flex flex-row">
                    <p
                      className={
                        task.done ? "flex-auto line-through" : "flex-auto"
                      }
                    >
                      {task.title} : {task.description}
                    </p>
                    <div className="flex-auto">
                      <div className="flex flex-row flex-wrap justify-end-safe gap-2">
                        <CompleteTask task={task} className="" />
                        <EditTask task={task} className="" />
                        <DeleteTask task={task} className="" />
                      </div>
                    </div>
                  </div>
                </li>
              )
          )}
        </ul>

        <div className="border border-blue-500 rounded-sm lg:max-w-1/2 m-4 p-4">
          <AddTaskForm />
        </div>
        <div className="mx-auto pt-6">
          <Logout />
        </div>
      </div>
    );
  }
}
