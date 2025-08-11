"use client";

import { addTask } from "../actions/task";
import { useActionState } from "react";

export function AddTaskForm() {
  const [state, action, pending] = useActionState(addTask, undefined);

  return (
    <div>
      <div className="pt-1">
        <h3 className="text-xl text-gray-900 leading-tight pb-5">Add a Task</h3>
        {state?.errors && <p>{state.errors}</p>}
        <form action={action}>
          <div>
            <label className="mr-1" htmlFor="title">
              Title:
            </label>
            <input
              className="px-4 py-2 leading-tight"
              id="title"
              name="title"
              type="text"
              placeholder="title"
              required
            />
          </div>

          <div>
            <label className="mr-1" htmlFor="description">
              Description:
            </label>
            <input
              className="px-4 py-2 leading-tight"
              id="description"
              name="description"
              type="text"
              placeholder="description"
              required
            />
          </div>

          <button className="action-button" disabled={pending} type="submit">
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
}
