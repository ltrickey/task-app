"use client";
import { useActionState } from "react";
import { markComplete } from "../actions/task";

// TODO SEND TRUE OR FALSE
export default function CompleteTask(task) {
  const buttonText = task.task.done ? "Undo" : "Done";
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
          className="action-button"
          disabled={pending}
          type="submit"
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
}
