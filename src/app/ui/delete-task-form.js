"use client";
import { useActionState } from "react";
import { deleteTask } from "../actions/task";

// TODO SEND TRUE OR FALSE
export default function DeleteTask(task) {
  const deleteWithTask = deleteTask.bind(null, task);
  const [state, action, pending] = useActionState(deleteWithTask, undefined);

  // TODO: change form to just button and use .bind?
  return (
    <div>
      {state?.errors && <p>{state.errors}</p>}
      <form action={action}>
        {/* sending opposite value here to flip complete/not complete */}
        <button
          className="action-button"
          disabled={pending}
          type="submit"
        >
          Delete
        </button>
      </form>
    </div>
  );
}
