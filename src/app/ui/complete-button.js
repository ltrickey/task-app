"use client";
import { useActionState } from "react";

import { markComplete } from "../actions/task";

// TODO SEND TRUE OR FALSE
export default function Complete(task) {
  console.log("insidwe complete button");
  console.log(task);
  const buttonText = task.task.done ? "Mark Not Complete" : "Mark Complete";
  const markCompleteWithTask = markComplete.bind(null, task);
  const [state, action, pending] = useActionState(
    markCompleteWithTask,
    undefined
  );

  return (
    <form action={action}>
      {/* sending opposite value here to flip complete/not complete */}
      <button disabled={pending} type="submit">
        {buttonText}
      </button>
    </form>
  );
}
