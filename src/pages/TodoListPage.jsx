import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddTodoForm from "../components/AddTodoForm";

export const TodoListPage = (props) => {
  const [task, setTask] = useState("");
  const [completed, setCompleted] = useState(false);

  const handleTaskInput = (e) => setTask(e.target.value);
  const handleCompletedInput = (e) => setCompleted(e.target.checked);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { task: task, completed: completed, id: Date.now() }; //Generate ID's for tasks
    props.addNewTask(newTask);

    setTask("");
    setCompleted(false);
  };

  return (
    <div className="homepage-text">
      <h1>What you have to do...</h1>
      <AddTodoForm addNewTask={props.addNewTask} />
      {props.tasks.map((oneTask, index) => {
        return (
          <div key={oneTask.id}>
            <Link to={`/todos/${oneTask.id}`}>
              <p>
                {oneTask.task} - {oneTask.completed ? "✔️" : "❌"}
              </p>
            </Link>
            <button onClick={() => props.handleDeleteTask(index)}>
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};
