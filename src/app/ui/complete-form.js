"use client";
import { useActionState } from "react";
import { markComplete } from "../actions/task";

// TODO SEND TRUE OR FALSE
export default function CompleteTask(task) {
  const buttonText = task.task.done ? "Undo Complete" : "Complete";
  const markCompleteWithTask = markComplete.bind(null, task);
  const [state, action, pending] = useActionState(
    markCompleteWithTask,
    undefined
  );

  // TODO: change form to just button and use .bind?
  return (
    <div>
      {state?.errors && <p>{state.errors}</p>}
      <form action={action}>
        {/* sending opposite value here to flip complete/not complete */}
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          disabled={pending}
          type="submit"
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
}
