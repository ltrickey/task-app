"use server";

import Login from "./login";



export default async function TaskList() {
  // can't use state here, because function is async

  let userId = null;
  let loggedIn = false;
  let error = null;
  let email = null;
  let password = null;

  if (loggedIn) {
    const data = await fetch("http://localhost:4000/tasks?userId=" + userId);
    const tasks = await data.json();
    return (
      <ul>
        {tasks.map((task) => (
          <li key={task[i].id}>
            {task[i].title} : {task[i].description}{" "}
          </li>
        ))}
      </ul>
    );
  } else {
    // TODO Pull this into separate component
    
  return (
    <div>

      <h1>Login</h1>
      { error && <p>{error}</p> }

      <form onSubmit={handleLogin}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => email = e.target.value}
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => password = e.target.value}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
  }
}

export async function handleLogin(formData) {
  "use server";
  console.log("BITCH");
  console.log(formData);
  // const email = formData.get("email");
  // const password = formData.get("password");

  try {
    const res = await fetch("http://localhost:4000/users");
    if (!res.ok) {
      setError("Failed to login");
    }

    const users = await res.json();

    //   for (const user of users) {
    //     if (user.email == email && user.password == password) {
    //       console.log("inside true");
    //       // set loged in
    //       handleLoggedIn(user.id);
    //       e.preventDefault();
    //       return;
    //     }
    //   }
    //   // Handle successful login
  } catch (err) {
    console.log("caught error: " + err);
    error = "Something went wrong, please try again";
  }

  // userId = id;
  // loggedIn = true;
}
