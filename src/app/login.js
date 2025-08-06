"use client";

import { useState } from "react";
import { handleLogin } from "./taskList";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   handleLogin(email, password);
  //   // try {
  //   //   const res = await fetch("http://localhost:4000/users");
  //   //   if (!res.ok) {
  //   //     setError("Failed to login");
  //   //   }

  //   //   const users = await res.json();

  //   //   for (const user of users) {
  //   //     if (user.email == email && user.password == password) {
  //   //       console.log("inside true");
  //   //       // set loged in
  //   //       handleLoggedIn(user.id);
  //   //       e.preventDefault();
  //   //       return;
  //   //     }
  //   //   }
  //   //   // Handle successful login
  //   // } catch (err) {
  //   //   console.log("caught error: " + err);
  //   //   setError("Something went wrong, please try again");
  //   // }
  // };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
