import React, { useState } from "react";

function AddTodoForm({ addNewTask }) {
  const [task, setTask] = useState("");
  const [completed, setCompleted] = useState(false);

  const handleTaskInput = (e) => setTask(e.target.value);
  const handleCompletedInput = (e) => setCompleted(e.target.checked);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { task: task, completed: completed, id: Date.now() }; //Generate ID's for tasks
    addNewTask(newTask);
    setTask("");
    setCompleted(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={handleTaskInput}
      />
      <input
        type="checkbox"
        checked={completed}
        onChange={handleCompletedInput}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}
export default AddTodoForm;
