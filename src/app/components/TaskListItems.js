import CompleteTask from "../ui/complete-form.js";
import EditTask from "../ui/edit-task-form.js";
import DeleteTask from "../ui/delete-task-form.js";

export default async function TaskListItems(params) {
  const { tasks } = await params;
  const toDo = tasks.filter((task) => !task.done);
  console.log(Object.keys(toDo).length);
  const complete = tasks.filter((task) => task.done);
  console.log(complete.size);
  return (
    <>
      {/* map each of these to it's own component, and use generateStaticParams */}
      {toDo.map(
        (task) =>
          !task.done && (
            <li
              className="hover:bg-blue-100 border border-blue-500 rounded-sm lg:max-w-3/4 m-4 p-2"
              key={task.id}
            >
              <div className="flex flex-row">
                <p className="flex-auto">
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
      {Object.keys(complete).length > 0 && (
        <h3 className="text-md text-gray-900 leading-tight m-4">
          Complete &#10003;
        </h3>
      )}
      {complete.map((task) => (
        <li
          className="border border-blue-500 rounded-sm md:max-w-3/4 lg:max-w-3/4 m-4 p-2"
          key={task.id}
        >
          <div className="flex flex-row">
            <p className="flex-auto line-through">
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
      ))}
    </>
  );
}
