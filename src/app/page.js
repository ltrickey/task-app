import { LoginForm } from "./ui/login-form";

export default async function TaskList() {
  // can't use state here, because function is async

  let userId = null;
  let loggedIn = false;
  let error = null;
  let email = null;
  let password = null;

  // if (loggedIn) {
  //   const data = await fetch("http://localhost:4000/tasks?userId=" + userId);
  //   const tasks = await data.json();
  //   return (
  //     <ul>
  //       {tasks.map((task) => (
  //         <li key={task[i].id}>
  //           {task[i].title} : {task[i].description}{" "}
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // } else {
  // TODO Pull this into separate component
  return <LoginForm />;
}

// export default async function Page() {
//   const data = await fetch('https://api.vercel.app/blog')
//   const posts = await data.json()
//   return (
//     <ul>
//       {posts.map((post) => (
//         <li key={post.id}>{post.title}</li>
//       ))}
//     </ul>
//   )
// }

//   let taskList = [];
//   // Using a for loop to iterate over the array of items
//   for (let i = 0; i < tasks.length; i++) {
//     // Creating JSX element for each item and pushing it into the array
//     taskList.push(
//       <li key={task[i].id}>
//         {task[i].title} : {task[i].description}{" "}
//       </li>
//     );
//   }
//   // having issue with setting this - need an array rather than the li items,
//   // but getting closer!!
//   return (
//     <div className="flex flex-col h-screen w-screen justify-center items-center">
//       <h1>Your Tasks</h1>
//       <ul>{taskList}</ul>
//     </div>
//   );
// }

// const handleGetTasks = async (id) => {
//   try {
//     const res = await fetch("http://localhost:4000/tasks?userId=" + id);
//     if (!res.ok) {
//       // TODO set error here instead
//       throw new Error("Failed to fetch tasks for user");
//     }

//     const jsonPromises = await res.json();

//     if (!jsonPromises) {
//       // TODO set error here instead
//       throw new Error("Failed to fetch tasks for user");
//     }

//     return await Promise.all(jsonPromises)
//       .then((results) => {
//         return results;
//       })
//       .catch((error) => {
//         // TODO: Set Error
//         console.error("Get tasks failed:", error);
//       });
//   } catch (error) {
//     console.error(error); // from creation or business logic
//   }
// };
