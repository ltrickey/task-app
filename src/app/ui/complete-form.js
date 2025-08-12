"use client";
import { useActionState } from "react";
import { markComplete } from "../actions/task";

export default function CompleteTask(task) {
  // Bind sends task without putting it in payload
  const markCompleteWithTask = markComplete.bind(null, task);
  const [state, action, pending] = useActionState(
    markCompleteWithTask,
    undefined
  );

  return (
    <div>
      {state?.errors && <p>{state.errors}</p>}
      <form action={action}>
        {/* sending opposite value here to flip complete/not complete */}
        <button className="action-button" disabled={pending} type="submit">
          &#10003;
        </button>
      </form>
    </div>
  );
}
