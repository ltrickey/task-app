'use client'

import { useState } from "react"



export default function Login({loginFail, handleLogin}) {  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [id, setId] = useState(1);
  const [error, setError] = useState(null);
  return (
    <div>
        <h1>Login</h1>
        {error && <p>{error}</p>}
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
