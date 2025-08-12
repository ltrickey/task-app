"use client";

import { login } from "../actions/auth";
import { useActionState } from "react";

export function LoginForm() {
  const [state, action, pending] = useActionState(login, {});

  return (
    <div className="container max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl">
      <div className="ml-6 pt-1">
        <h3 className="text-xl text-gray-900 leading-tight pb-5">
          Login to view Tasks
        </h3>
        {/* TODO: separate email and password errors: 
        ie user not found vs password incorrect */}
        {state?.errors && <p>{state.errors}</p>}

        <form action={action}>
          <div>
            <label className="mr-1" htmlFor="email">
              Email:
            </label>
            <input
              className="px-4 py-2 leading-tight"
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              required
            />
          </div>

          <div className="pb-3">
            <label className="mr-1" htmlFor="password">
              Password:
            </label>
            <input
              className="px-4 py-2 leading-tight"
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              autoComplete="current-password"
              required
            />
          </div>

          <button className="action-button" disabled={pending} type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
