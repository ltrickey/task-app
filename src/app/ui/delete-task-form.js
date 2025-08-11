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
          className="py-2 px-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white border border-blue-500 hover:border-transparent rounded"
          disabled={pending}
          type="submit"
        >
          Delete
        </button>
      </form>
    </div>
  );
}
