export default async function TaskList(id) {
// can't use state here, because function is async
  const data = await fetch("http://localhost:4000/tasks?userId=" + id);
  const tasks = await data.json()
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task[i].id}>
          {task[i].title} : {task[i].description}{" "}
        </li>
      ))}
    </ul>
  )
}