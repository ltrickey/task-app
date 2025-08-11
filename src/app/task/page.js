import { getTasks, getTask } from "../lib/dal";
import Complete from "../ui/complete-button";

async function getSpecificTask(id) {
  return await getTask(id);
}

// This allows us to generate multiple components for each task
// at build rather than at run time
export async function generateStaticParams() {
  const tasks = await getTasks();
  return tasks.map((task) => ({
    id: task.id.toString(),
  }));
}

export default async function Task({ params }) {
  const { id } = await params; // async wait for params rather than statically getting as in above
  const task = await getSpecificTask(id);
  if (!task) return <div>Task not found</div>;
  return (
    <li key={task.id}>
      {task.title} : {task.description} : {task.id}{" "}
      <Complete task={task} />
    </li>
  );
}
