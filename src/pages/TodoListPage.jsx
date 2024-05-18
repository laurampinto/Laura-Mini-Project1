import React from "react";
import { useState } from "react";
import tasksJSON from "../tasks.json";
import AddTodoForm from "../components/AddTodoForm";

export const TodoListPage = (props) => {
  const [tasks, setTasks] = useState(tasksJSON);
  const [task, setTask] = useState("");

  const handleTaskInput = (e) => setTask(e.target.value);
  const handleCompletedInput = (e) => setCompleted(e.target.checked);

  const [completed, setCompleted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { task: task, completed: completed };
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
            <p>
              {oneTask.task} - {oneTask.completed ? "✔️" : "❌"}
            </p>
            <button onClick={() => props.handleDeleteTask(index)}>
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};
