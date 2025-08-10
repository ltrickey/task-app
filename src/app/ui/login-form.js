"use client";

import { login } from "../actions/auth";
import { useActionState } from "react";

export function LoginForm() {
  const [state, action, pending] = useActionState(login, undefined);

  return (
    <div>
      <h1>Login</h1>
      {/* TODO: separate email and password errors: 
      ie user not found vs password incorrect */}
      {state?.errors && <p>{state.errors}</p>}

      <form action={action}>
        <div>
          <label htmlFor="email">Email:</label>
          <input id="email" name="email" type="email" placeholder="Email" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
          />
        </div>

        <button disabled={pending} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
