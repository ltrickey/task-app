"use client";
import { useState, useActionState } from "react";
import { editTask } from "../actions/task";

// TODO SEND TRUE OR FALSE
export default function EditTask(task) {
  const taskClone = Object.assign({}, task);

  const [title, setTitle] = useState(taskClone.task.title);
  const [description, setDescription] = useState(taskClone.task.description);
  const [isVisible, setIsVisible] = useState(false);

  //bind original task to send without putting in form
  const editTaskBound = editTask.bind(null, task);
  const [state, action, pending] = useActionState(editTaskBound, undefined);

  // TODO: change form to just button and use .bind?
  return (
    <div>
      {state?.errors && <p>{state.errors}</p>}
      <button
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        disabled={pending}
        onClick={() => {
          setIsVisible(!isVisible);
        }}
      >
        Edit
      </button>
      {isVisible && (
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
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
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
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </div>
          <button
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white border py-2 px-4  border-blue-500 hover:border-transparent rounded"
            disabled={pending}
            type="submit"
          >
            Save
          </button>
        </form>
      )}
    </div>
  );
}
